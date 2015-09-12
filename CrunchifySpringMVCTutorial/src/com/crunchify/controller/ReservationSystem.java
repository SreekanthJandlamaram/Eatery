package com.crunchify.controller;

import java.util.logging.Logger;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ReservationSystem {

	static Logger log = Logger.getLogger(ReservationSystem.class.getName());
	
	@RequestMapping(value = "/reser", method = RequestMethod.GET)
    public @ResponseBody Reservation confirm(@RequestParam("idd") int idd) {    	
    	Reservation reserv = new Reservation();
    	reserv.setSize(idd);
		return reserv;
    }
    
    @RequestMapping(value = "/reserve", method = RequestMethod.POST)
    public @ResponseBody Reservation confirmReservation(@RequestBody Reservation user) {
    	return user;
    }
    
    @RequestMapping(value="/editReservation/{tktId}", method=RequestMethod.GET)
    public @ResponseBody Reservation editReservation(@PathVariable("tktId") int tktId) {
    	
    	Reservation editReservation = new Reservation();
    	System.out.println(tktId);
    	editReservation.setName("Sreekanth");
    	return editReservation;
    }
}
