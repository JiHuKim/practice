package com.example.java.api.sign;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import com.example.java.api.sign.service.SignService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api/sign")
public class SignController {
    
    @Resource(name = "signService")
    private SignService signService;

    @RequestMapping(value = "/up", method = RequestMethod.POST)
    public void signUp(@RequestBody Map<String,String> values ,HttpServletRequest req) throws Exception {
        System.out.println(req);
        System.out.println(values);
    }

}
