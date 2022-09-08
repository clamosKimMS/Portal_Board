package com.portal.board.controller;

import com.portal.board.dto.sidebar_dto;
import com.portal.board.service.sidebar_service;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Log4j2
public class InitController {
    private final sidebar_service service;
    @GetMapping("/api/page")
    public List<sidebar_dto> getPlace() {

        List<sidebar_dto> dtoList = service.entityToDTO();

        return dtoList;
    }
    @GetMapping("/")
    public String list() {
        log.info("list ....");
        return "hi";
    }
}

