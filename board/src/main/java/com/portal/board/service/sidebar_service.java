package com.portal.board.service;

import com.portal.board.dto.sidebar_dto;
import com.portal.board.repository.sidebar_repository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class sidebar_service {

    private final sidebar_repository repository;

    public List<sidebar_dto> entityToDTO() {
        return repository.findAll().stream().map(sidebar_dto::fromEntity).collect(Collectors.toList());
    }

}
