import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TailwindComponent} from "./tailwind/tailwind.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TailwindComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  result: number = 0
  expression: string = "No Expression"
  temp: string = ""
  lastChar: string = ""
  isCalculated = false

  clear() {
    this.result = 0
    this.expression = "No Expression"
    this.temp = ""
  }

  createExpression(ex: string) {
    if (this.isCalculated) {
      this.isCalculated = false
      this.expression = "No Expression"
    }

    if (this.expression == "No Expression") {
      if (ex == "%" || ex == "*" || ex == "/") {
        this.expression = "No Expression"
      } else {
        this.expression = ex
        this.lastChar = ex
      }
    } else {
      if ((ex == "/" || ex == "*" || ex == "-" || ex == "+" || ex == "." || ex == "%") &&
        (this.lastChar == "/" || this.lastChar == "*" || this.lastChar == "-" || this.lastChar == "+" || this.lastChar == "." || this.lastChar == "%")) {
        this.expression += ""
      } else {
        this.expression += ex
        this.lastChar = ex
      }
    }

  }

  equal() {
    if (this.expression.includes("%")) {
      let q = this.expression.replace("%", "*0.01")
      this.result = eval(q)
    } else {
      this.result = eval(this.expression)
    }
    this.isCalculated = true
  }

}
