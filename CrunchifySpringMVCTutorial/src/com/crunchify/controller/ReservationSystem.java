package com.crunchify.controller;

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
}
