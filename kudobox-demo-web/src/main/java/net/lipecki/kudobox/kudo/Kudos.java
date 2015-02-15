package net.lipecki.kudobox.kudo;

import java.util.Date;

public class Kudos {

	private String userFrom;

	private String userFor;

	private String message;

	private Date date = new Date();

	public Kudos() {
	}

	public Kudos(final String userFrom, final String userFor, final String message, final Date date) {
		super();
		this.userFrom = userFrom;
		this.userFor = userFor;
		this.message = message;
		this.date = date;
	}

	public Date getDate() {
		return date;
	}

	public String getMessage() {
		return message;
	}

	public String getUserFor() {
		return userFor;
	}

	public String getUserFrom() {
		return userFrom;
	}

	public void setDate(final Date date) {
		this.date = date;
	}

	public void setMessage(final String message) {
		this.message = message;
	}

	public void setUserFor(final String userFor) {
		this.userFor = userFor;
	}

	public void setUserFrom(final String userFrom) {
		this.userFrom = userFrom;
	}

}
