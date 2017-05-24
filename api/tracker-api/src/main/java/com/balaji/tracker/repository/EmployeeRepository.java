package com.balaji.tracker.repository;

import com.balaji.tracker.entity.Employee;

import java.util.List;

public interface EmployeeRepository {

    List<Employee> findAll();

    Employee findOne(String id);

    Employee findByEmail(String email);

    Employee create(Employee emp);

    Employee update(Employee emp);

    void delete(Employee emp);
}
