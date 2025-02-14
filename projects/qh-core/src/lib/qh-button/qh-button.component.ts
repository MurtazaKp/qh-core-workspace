import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-qh-button',
  templateUrl: './qh-button.component.html',
  styleUrls: ['./qh-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QhButtonComponent implements OnInit {

  @Input() state: 'regular' | 'danger' ="regular"
  @Input() type: 'primary' | 'secondary' | 'tertiary' = "tertiary";
  @Input() icon: 'no icon' | 'leading' | 'trailing' | 'only icon' | 'both' = "no icon";
  @Input() size: 'large' | 'medium' | 'small' = "medium";  
  @Input() disabled?:boolean;
  @Input() text: string ="Button";
  @Input() ariaLabel: string = "button";
  @Input() theme: 'light' | 'dark' ="light";
  @Output() click= new EventEmitter<void>();
  

  constructor() { }

  public get classes(): string[] {
    const baseClasses = [];
    let baseClass = "";

    // state attribute
    this.state === 'danger' ? (baseClasses.push('qh-button-danger'), baseClass="qh-button-danger") : (baseClasses.push('qh-button'), baseClass="qh-button");

    // size attribute
    this.size === 'small' ? baseClasses.push(`${baseClass}--sm`) : this.size === 'large' ? baseClasses.push(`${baseClass}--lg`) : this.size === 'medium' ? baseClasses.push(`${baseClass}--md`) : null;

    // type attribute
    this.type === 'secondary' ? baseClasses.push(`${baseClass}--secondary`) : this.type === 'tertiary' ? baseClasses.push(`${baseClass}--tertiary`) : this.type === 'primary' ? baseClasses.push(`${baseClass}--primary`) : null;

    // icon attribute
    this.icon === 'only icon' ? baseClasses.push(`${baseClass}--icon`) : null;

    return baseClasses;
  }

  buttonClick(){
    this.click.emit(); 
   }
  ngOnInit(): void {
  }

}
