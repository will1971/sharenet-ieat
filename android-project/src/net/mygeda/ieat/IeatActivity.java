package net.mygeda.ieat;

import android.app.Activity;
import android.os.Bundle;
import android.view.Window;
import android.view.WindowManager;

import com.phonegap.*;

public class IeatActivity extends DroidGap {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,  
        //        WindowManager.LayoutParams.FLAG_FULLSCREEN);  
		super.loadUrl("file:///android_asset/www/index.html");
	}
}
