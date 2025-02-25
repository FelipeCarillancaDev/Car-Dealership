import { BadRequestException, Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // { id: uuid(), brand: 'Honda', model: 'Civic' },
    // { id: uuid(), brand: 'Toyota', model: 'Corolla' },
  ];

  findAllCars(): Car[] {
    return this.cars;
  }

  findCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car)
      throw new BadRequestException(`Auto con id: "${id}" no encontrado`);
    return car;
  }

  createCar(createCarDto: CreateCarDto) {
    const car: Car = { id: uuid(), ...createCarDto };
    this.cars.push(car);
    return car;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    const car = this.findCarById(id);
    const index = this.cars.findIndex((car) => car.id === id);
    this.cars[index] = { ...car, ...updateCarDto };
    return this.cars[index];
  }

  deleteCar(id: string) {
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
