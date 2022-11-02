package com.org.jsp.Restaurant.constants.Repository;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.org.jsp.Restaurant.entity.Restaurant;

public class RestaurantRepository {

	public void saveRestaurantDetails(Restaurant res) {
		
			Configuration cfg = new Configuration();
			cfg.configure();
			SessionFactory sessionFactory = cfg.buildSessionFactory();
			Session session = sessionFactory.openSession();
			Transaction transaction = session.beginTransaction();
			session.save(res);
			transaction.commit();
		
	}
}
