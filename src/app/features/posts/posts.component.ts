import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../core/services/post.service';
import { Post, CreatePostDto, UpdatePostDto } from '../../core/models/post.model';
import { PostFormComponent } from './components/post-form/post-form.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PostFormComponent],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  loading: boolean = false;
  selectedPost: Post | null = null;
  showCreateForm: boolean = false;
  editingPost: Post | null = null;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.loading = true;
    this.postService.getPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading posts:', error);
        this.loading = false;
        alert('Error al cargar las publicaciones');
      }
    });
  }

  viewPost(post: Post): void {
    this.selectedPost = post;
  }

  openCreateForm(): void {
    this.showCreateForm = true;
    this.editingPost = null;
  }

  openEditForm(post: Post): void {
    this.editingPost = post;
    this.showCreateForm = false;
  }

  onCreatePost(postData: CreatePostDto): void {
    this.postService.createPost(postData).subscribe({
      next: (newPost: Post) => {
        this.posts.unshift(newPost); // Agregar al inicio
        this.showCreateForm = false;
        alert('Publicación creada exitosamente');
      },
      error: (error) => {
        console.error('Error creating post:', error);
        alert('Error al crear la publicación');
      }
    });
  }

  onUpdatePost(postData: UpdatePostDto): void {
    if (this.editingPost) {
      this.postService.updatePost(this.editingPost.id, postData).subscribe({
        next: (updatedPost: Post) => {
          const index = this.posts.findIndex(p => p.id === this.editingPost!.id);
          if (index !== -1) {
            this.posts[index] = updatedPost;
          }
          this.editingPost = null;
          alert('Publicación actualizada exitosamente');
        },
        error: (error) => {
          console.error('Error updating post:', error);
          alert('Error al actualizar la publicación');
        }
      });
    }
  }

  deletePost(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta publicación?')) {
      this.postService.deletePost(id).subscribe({
        next: () => {
          this.posts = this.posts.filter(p => p.id !== id);
          alert('Publicación eliminada exitosamente');
        },
        error: (error) => {
          console.error('Error deleting post:', error);
          alert('Error al eliminar la publicación');
        }
      });
    }
  }

  closeModal(): void {
    this.selectedPost = null;
  }

  closeForm(): void {
    this.showCreateForm = false;
    this.editingPost = null;
  }
}
