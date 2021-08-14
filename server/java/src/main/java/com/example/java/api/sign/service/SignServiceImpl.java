package com.example.java.api.sign.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

@Service("signService")
public class SignServiceImpl implements SignService {
    
    @Resource(name = "signDAO")
    private SignDAO signDAO;

    @Override
    public void signUp() throws Exception {
        
    }

}
