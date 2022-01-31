module Api
    class EmployeesController < ApplicationController
        def index
            employees = Employee.all
            render json: employees
        end

        def create
            employee = Employee.new(employee_params)
            employee.save
            render json: employee
        end

        private

        def employee_params
            params.permit(:name, :first_name, :last_name)
        end
    end
end