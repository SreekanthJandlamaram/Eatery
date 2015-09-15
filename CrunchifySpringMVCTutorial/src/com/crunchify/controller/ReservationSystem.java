package com.crunchify.controller;

import java.util.logging.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ReservationSystem {

	static Logger log = Logger.getLogger(ReservationSystem.class.getName());
	
	//POST calls
	@RequestMapping(value = "/reserve", method = RequestMethod.POST)
    public @ResponseBody Reservation confirmReservation(@RequestBody Reservation user) {
    	System.out.println("User date : "+ user.getDate());
    	return user;
    }
    
	//Get Calls
	@RequestMapping(value = "/reser", method = RequestMethod.GET)
    public @ResponseBody Reservation confirm(@RequestParam("idd") int idd) {    	
    	Reservation reserv = new Reservation();
    	reserv.setSize(idd);
		return reserv;
    }
    
    @RequestMapping(value="/editReservation/{tktId}", method=RequestMethod.GET)
    public @ResponseBody Reservation editReservation(@PathVariable("tktId") int tktId) {
    	
    	Reservation editReservation = new Reservation();
    	System.out.println(tktId);
    	editReservation.setName("Sreekanth");
    	editReservation.setDate("2015-09-12T18:00:00.000Z");
    	return editReservation;
    }
}
