module Api
    class EmployeesController < ApplicationController
        before_action :set_employee, only: %i[show update]

        def index
            employees = Employee.all
            render json: employees
        end

        def create
            employee = Employee.new(employee_params)
            employee.save
            render json: employee
        end

        def show
            
        end

        private

        def set_employee
            @employee = Employee.find(params[:id])
         end

        def employee_params
            params.permit(:name, :first_name, :last_name)
        end
    end
end