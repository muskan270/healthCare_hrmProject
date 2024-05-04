import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Post } from '../model/post';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and FormGroup

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder, public router: Router) { // Inject FormBuilder
    this.createForm = this.fb.group({
      _id: [''], // Add _id control to the form
      username: ['', Validators.required],
      title: ['', Validators.required],
      date: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  createPostData(): void {
    if (this.createForm.valid) {
      const postData: Post = {
        _id: this.createForm.value._id, // Assign value of _id control
        username: this.createForm.value.username,
        title: this.createForm.value.title,
        date: this.createForm.value.date,
        content: this.createForm.value.content
      };

      this.api.createPost(postData).subscribe(
        () => {
          console.log('Post created successfully!');
          // You can navigate to another page or perform any other action upon successful creation
        },
        err => {
          console.error('Error creating post:', err);
        }
      );
    }
    this.router.navigate(['list']);
  }
}
