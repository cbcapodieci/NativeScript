package com.tns.gen.com.couchbase.lite;

public class Database_ChangeListener implements com.couchbase.lite.Database.ChangeListener {
	public Database_ChangeListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void changed(com.couchbase.lite.Database.ChangeEvent param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "changed", void.class, args);
	}

}
