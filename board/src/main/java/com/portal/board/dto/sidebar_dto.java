package com.portal.board.dto;

import com.portal.board.entity.sidebar_entity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class sidebar_dto {
    private Long id;
    private String subTitle;

    public static sidebar_dto fromEntity(sidebar_entity entity) {
        return sidebar_dto.builder()
                .id(entity.getId())
                .subTitle(entity.getSubTitle())
                .build();
    }
}
