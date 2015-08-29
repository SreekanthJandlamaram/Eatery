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
public class CrunchifyHelloWorldOld {

	@RequestMapping(value = "/welcome")
    public ModelAndView helloWorld() {

        String message = "<br><div style='text-align:center;'>" + "<h3>Hello World, Spring MVC Tutorial</h3>This message is coming from CrunchifyHelloWorld.java</div><br><br>";
        return new ModelAndView("welcome", "message", message);
    }

    // URL : param?petId=10
    @RequestMapping(value = "/param")
    public ModelAndView byeWorld(@RequestParam("petId") int petId) {
        String message = "<h3> Thanks for visiting </h3></div><br><br>" + petId;
        return new ModelAndView("bye", "message", message);
    }

    // URL : getName/sreekanth
    @RequestMapping(value = "/getName/{stuName}", method = RequestMethod.GET)
    public ModelAndView method(@PathVariable String stuName) {

        String message = stuName;
        return new ModelAndView("bye", "message", message);
    }
    
    @RequestMapping(value = "/student", method = RequestMethod.GET, headers = "Accept=application/json")
    public @ResponseBody
    Student student() {
        Student stu = new Student();
        stu.setStuName("swapan");
        stu.setRollNum(10);
        return stu;
    }
}
