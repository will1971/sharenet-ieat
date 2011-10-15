package net.mygeda.ieat;

import java.io.IOException;
import java.io.Reader;
import java.io.StringReader;

import java.io.InputStreamReader;
import java.lang.reflect.Type;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.eclipse.jetty.util.TypeUtil;
import org.eclipse.jetty.util.log.Log;
import org.eclipse.jetty.util.log.Logger;
import org.eclipse.jetty.websocket.WebSocket;
import org.eclipse.jetty.websocket.WebSocketServlet;

import org.apache.commons.io.IOUtils;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;
/**
 * Order Info Proxy
 * 
 * @author sanli
 * 
 */
public class OrderProxyServlet extends WebSocketServlet {
	private static final Logger LOG = Log.getLogger(OrderProxyServlet.class);

	private final Set<ProxySocket> members = new CopyOnWriteArraySet<ProxySocket>();

	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response)
			throws javax.servlet.ServletException, IOException {
		String data = IOUtils.toString( request.getInputStream()) ;
		
		for(ProxySocket member : members){
			member.sendMessage(data);
		}
		
		response.getWriter().write("OK");
	};

	@Override
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response)
			throws javax.servlet.ServletException, IOException {
		doGet(request, response);
	};

	public WebSocket doWebSocketConnect(HttpServletRequest request,
			String protocol) {
		return new ProxySocket();
	}

	/* ------------------------------------------------------------ */
	/* ------------------------------------------------------------ */
	class ProxySocket implements WebSocket.OnTextMessage {
		Connection _connection;

		public void onOpen(Connection connection) {
			LOG.info(this + " onConnect");
			_connection = connection;
			members.add(this);
		}

		public void onMessage(byte frame, byte[] data, int offset, int length) {
			LOG.info(this + " onMessage: "
					+ TypeUtil.toHexString(data, offset, length));
		}

		public void onMessage(String data) {
			if (data.indexOf("disconnect") >= 0)
				_connection.disconnect();
			else {
				LOG.info(this + " onMessage: " + data);
				for (ProxySocket member : members) {
					try {
						member._connection.sendMessage(data);
					} catch (IOException e) {
						LOG.warn(e);
					}
				}
			}
		}

		/**
		 * on client connect to server from websocket
		 */
		public void onClose(int code, String message) {
			LOG.info(this + " onDisconnect");
			members.remove(this);
		}
		
		
		/**
		 * send message to client
		 * @param data
		 */
		public void sendMessage(String data){
			try {
				_connection.sendMessage(data);
			} catch (IOException e) {
				LOG.warn(e);
			}
		}

	}
	
	public static class OrdersPDU {
		String action ;
		String userID ;
		String key ;
		List<Order> orders ;
		
		public OrdersPDU(String action , String userID , String key , List<Order> orders ){
			this.action = action ;
			this.userID = userID ;
			this.key = key ;
			this.orders = orders ;
		}
	}
	
	public static OrdersPDU parserPDU(Reader isr){
	    Gson gson = new Gson();
	    
	    JsonParser parser = new JsonParser();
	    JsonArray array = parser.parse(isr).getAsJsonArray();
	    
	    String action = gson.fromJson(array.get(0), String.class);
	    String userid = gson.fromJson(array.get(1), String.class);
	    String key = gson.fromJson(array.get(2), String.class);
	    
	    JsonArray orderArray = array.get(3).getAsJsonArray();
	    Type type = new TypeToken<Order>(){}.getType();
	    List<Order> contacts = new ArrayList<Order>();
	    for(int i = 0 ; i<= orderArray.size() - 1 ; i++){
	    	// 转化出Order对象
	    	Order x = gson.fromJson(orderArray.get(i), type);
	    	x.setCount(orderArray.get(i).toString()) ;
	    	contacts.add(x) ;
	    }
	    
	    return new OrdersPDU(action, userid , key, contacts);
	}
	
	
	public static String toPDU(boolean state , String msg , List<Order> orders){
		StringBuilder sb = new StringBuilder("[") ;
		if(state){
			sb.append("\"OK\",\"\",");
		}else{
			sb.append("\"FAIL\",\""+msg+"\",");
		}
		
		if( orders!= null && orders.size() > 0 ){
			sb.append("[");
			
			for(int i =0 ; i<= orders.size() - 1 ; i++){
				Order order = orders.get(i) ;
				sb.append(order.getId()).append(",").append(order.getCount()) ;
				
				if( i != orders.size() - 1 )
					sb.append(",") ;
			}
			sb.append("]");
		}else{
			sb.append("[]");
		}
		sb.append("]");
		return sb.toString() ;
	}
	
	
	/**
	 * this is for test purpose
	 * @param input
	 * @return
	 */
	public static OrdersPDU parserPDU(String input){
		StringReader sr = new StringReader(input);
		return parserPDU(sr);
	}
	
}
