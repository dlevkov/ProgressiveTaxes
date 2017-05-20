import { Injectable } from '@angular/core';

@Injectable()
export class ProgressiveService {
  public getTaxes(salary: number): number {
    let income = salary;
    let taxes = 0;
    while (taxes > 0) {
      console.log('start', income);
      taxes += this.getProgressiveRange(income);
      console.log('inside', income, taxes);
      income -= taxes;
    }
    console.log('finish', income);
    return taxes;
  }
  private getProgressiveRange(salary: number) {
    console.log('switch', salary);
    switch (true) {
      case (salary > 0 && salary < 3000):
        return 0;
      case (salary >= 3000 && salary < 5000):
        return Math.round(salary / 1.1);
      case (salary >= 5000 && salary < 10000):
        return Math.round(salary / 1.3);
      case (salary >= 10000):
        return Math.round(salary / 2);
    }
  }

}
