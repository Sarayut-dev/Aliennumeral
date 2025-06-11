import { Component } from '@angular/core';

// import { Fixdata } from '../../model/Home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  text = '';
  txterror : boolean = false;
  output : number | null = null;


  ArrayText = ['A','B','Z','L','C','D','R'];
  fixdata : { [key: string]: number } = {
    'A': 1,
    'B': 5,
    'Z': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'R': 1000
  };


  Convertutput(text: string): number {
    let total = 0;
    let i = 0;

    // for (let i = 0; i < text.length; i++) {
    //   console.log("text[i]", text[i]);
    //   const value_cur = this.fixdata[text[i]]
    //   const value_back = this.fixdata[text[(i+1)]]
    //   console.log("value_back", value_cur, value_back);
    //   if(value_cur < value_back){
    //     let sum = value_back - value_cur
    //     console.log("sum", sum);
    //     total += total + sum
    //     i++;
    //   }else{
    //     total += total + value_cur
    //   }
    // }

    while(i < text.length){
      const value_cur = this.fixdata[text[i]]
      const value_back = this.fixdata[text[(i+1)]]

      if(typeof(value_back) !== "undefined" && value_cur < value_back){
        total += value_back - value_cur
        i+=2
      }else{
        total += value_cur
        i++
      }
    }

    return total

  }

  onConvert() {
    let total = this.Convertutput(this.text);

    if(isNaN(total)){
      this.txterror = true
      this.output = null
    }else{
      this.txterror = false
      this.output = total
    }
  }

  public TextUppercase () {
    this.text = this.text.toUpperCase()
  }
}
