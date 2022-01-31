module Api
    class EmployeeController < :Api::ApplicationController
        def index
            employees = Employee.all
            render json: employees
        end
    end
end