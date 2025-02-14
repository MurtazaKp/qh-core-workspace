import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QhButtonComponent } from './qh-button.component';

describe('QhButtonComponent', () => {
  let component: QhButtonComponent;
  let fixture: ComponentFixture<QhButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QhButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QhButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default state', () => {
    expect(component.state).toBe('regular');
    expect(component.type).toBe('tertiary');
    expect(component.icon).toBe('no icon');
    expect(component.size).toBe('medium');
    expect(component.disabled).toBeUndefined();
    expect(component.text).toBe('Button');
  });

  it('should add qh-button-danger class when state is danger', () => {
    component.state = 'danger';
    fixture.detectChanges();
    expect(component.classes).toContain('qh-button-danger');
  });

  it('should add qh-button--sm class when size is small', () => {
    component.size = 'small';
    fixture.detectChanges();
    expect(component.classes).toContain('qh-button--sm');
  });

  it('should add qh-button--lg class when size is large', () => {
    component.size = 'large';
    fixture.detectChanges();
    expect(component.classes).toContain('qh-button--lg');
  });

  it('should not add any size class when size is not small or large', () => {
    component.size = 'medium';
    fixture.detectChanges();
    expect(component.classes).not.toContain('qh-button--sm');
    expect(component.classes).not.toContain('qh-button--lg');
  });

  it('should add qh-button--secondary class when type is secondary', () => {
    component.type = 'secondary';
    fixture.detectChanges();
    expect(component.classes).toContain('qh-button--secondary');
  });

  it('should add qh-button--primary class when type is primary', () => {
    component.type = 'primary';
    fixture.detectChanges();
    expect(component.classes).toContain('qh-button--primary');
  });

  it('should not add any type class when type is tertiary', () => {
    component.type = 'tertiary';
    fixture.detectChanges();
    expect(component.classes).not.toContain('qh-button--secondary');
    expect(component.classes).not.toContain('qh-button--primary');
  });

  it('should add qh-button--icon class when icon is only icon', () => {
    component.icon = 'only icon';
    fixture.detectChanges();
    expect(component.classes).toContain('qh-button--icon');
  });
  
  it('should not add qh-button--icon class when icon is not only icon', () => {
    component.icon = 'no icon';
    fixture.detectChanges();
    expect(component.classes).not.toContain('qh-button--icon');
  });

  it('should emit click event', () => {
    spyOn(component.click, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.click.emit).toHaveBeenCalledTimes(1);
  });

  it('should render button with default classes', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('qh-button')).toBe(true);
    expect(button.classList.contains('qh-button--tertiary')).toBe(true);
    expect(button.classList.contains('qh-button--md')).toBe(true);
  });

  it('should render button with custom classes', () => {
    component.state = 'danger';
    component.type = 'primary';
    component.icon = 'leading';
    component.size = 'large';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('qh-button-danger')).toBe(true);
    expect(button.classList.contains('qh-button-danger--primary')).toBe(true);
    expect(button.classList.contains('qh-button-danger--lg')).toBe(true);
  });

  it('should render button with disabled attribute', () => {
    component.disabled = true;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });

  it('should render button with custom text', () => {
    component.text = 'Custom Button';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('Custom Button');
  });
});