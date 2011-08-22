package net.mygeda.ieat;

import android.app.Activity;
import android.os.Bundle;
import android.view.Window;

import com.phonegap.*;

public class IeatActivity extends DroidGap {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl("file:///android_asset/www/index.html");
	}
}
