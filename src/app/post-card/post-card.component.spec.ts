import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardComponent } from './post-card.component';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('post', { title: 'Test Post', body: 'This is a test post.' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the post title', () => {
    const title = fixture.nativeElement.querySelector('.post-title');

    expect(title.textContent).toContain('Test Post');
  });

  it('should display the post body', () => {
    const title = fixture.nativeElement.querySelector('.post-body');

    expect(title.textContent).toContain('This is a test post.');
  });
});
