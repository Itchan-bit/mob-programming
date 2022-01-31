class Api::EmployeesController < ApplicationController
    before_action :set_employee, only: %i[show update destroy]

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
        render json: @employee
    end

    def update
        @employee.update(employee_params)
        render json: @employee
    end

    def destroy
        @employee.destroy
        render json: "allend walker destroyed"
    end

    private

    def set_employee
        @employee = Employee.find(params[:id])
        end

    def employee_params
        params.require(:employee).permit(:name, :first_name, :last_name)
    end
end