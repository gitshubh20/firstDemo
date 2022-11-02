package com.org.jsp.Restaurant.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "RESTAURANT_INFO")
public class Restaurant implements Serializable {

	@Id
//	@GenericGenerator(name = "m_auto", strategy = "increment")
//	@GeneratedValue(generator = "m_auto")
	
	@Column(name = "id")
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "type")
	private String type;

	@Column(name = "averageprice")
	private double averageprice;

	@Column(name = "rating")
	private int rating;
	
	@Column(name = "Contactnumber")
	private Long Contactnumber;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getAverageprice() {
		return averageprice;
	}

	public void setAverageprice(double averageprice) {
		this.averageprice = averageprice;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public Long getContactnumber() {
		return Contactnumber;
	}

	public void setContactnumber(Long contactnumber) {
		Contactnumber = contactnumber;
	}
	
}
	
	
