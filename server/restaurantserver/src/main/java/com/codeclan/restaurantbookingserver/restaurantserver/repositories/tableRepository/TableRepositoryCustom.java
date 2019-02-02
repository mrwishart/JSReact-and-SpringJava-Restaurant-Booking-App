package com.codeclan.restaurantbookingserver.restaurantserver.repositories.tableRepository;

import com.codeclan.restaurantbookingserver.restaurantserver.models.Table;

import java.util.Date;
import java.util.List;

public interface TableRepositoryCustom {
    List<Table>findAllTablesByDate(Date date);
    List<Table>findTableByCustomerId(Long customerId);
    List<Table> getAllTablesByDate(Date date);
}
