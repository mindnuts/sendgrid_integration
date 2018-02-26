frappe.ui.form.on("Email Account", {
	refresh: function(frm) {
		frm.dashboard.reset();
		if (frm.doc.sendgrid_webhook_credentials) {
			frm.dashboard.set_headline_alert(__("SendGrid integration is active"), "alert-default");
		}
	}
})
