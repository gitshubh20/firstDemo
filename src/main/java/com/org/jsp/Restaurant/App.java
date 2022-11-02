package com.org.jsp.Restaurant;

import com.org.jsp.Restaurant.entity.Restaurant;

public class App 
{
    public static void main( String[] args )
    {
       Restaurant res = new Restaurant();
      
       res.setId(01L);
       res.setName("Radission Blu");
       res.setAverageprice(5000L);
       res.setType("NonVeg");
       res.setRating(4);
       res.setContactnumber(97654L);
    }
}
