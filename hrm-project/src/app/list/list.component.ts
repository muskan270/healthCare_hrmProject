import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allPosts: Post[] = [];
  selectedPost: Post = {} as Post;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  getAllPost(): void {
    this.api.getAllPosts().subscribe(
      (res: Post[]) => {
        this.allPosts = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  deletePostData(post: Post): void {
    if (window.confirm('Are you sure you want to delete this data id:' + post._id)) {
      this.api.deletePost(post._id).subscribe(
        () => {
          this.allPosts = this.allPosts.filter(p => p._id !== post._id);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  editPost(post: Post): void {
    this.selectedPost = { ...post };
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.classList.add('show'); // Show the modal
      modal.style.display = 'block'; // Display the modal
      document.body.classList.add('modal-open'); // Prevent scrolling behind the modal
    }
  }

  closeEditModal(): void {
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.classList.remove('show'); // Hide the modal
      modal.style.display = 'none'; // Hide the modal
      document.body.classList.remove('modal-open'); // Enable scrolling behind the modal
    }
  }

  updatePost(): void {
    this.api.updatePost(this.selectedPost).subscribe(
      res => {
        // Assuming the update was successful, we can close the modal and refresh the post data
        this.closeEditModal();
        this.getAllPost();
      },
      err => {
        console.log(err);
        // Handle error if necessary
      }
    );
  }
}
