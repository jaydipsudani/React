import conf from "../conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteProjectId,
        conf.appwritecollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.error("Error creating post ::", error);
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteProjectId,
        conf.appwritecollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.error("Error Updating post ::", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteProjectId,
        conf.appwritecollectionId,
        slug
      );
    } catch (error) {
      console.error("Error deleting post ::", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteProjectId,
        conf.appwritecollectionId,
        slug
      );
    } catch (error) {
      console.error("Error geting post :: ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("staus", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteProjectId,
        conf.appwritecollectionId,
        queries
      );
    } catch (error) {
      console.error("App write service :: getposts :: error ", error);
      return false;
    }
  }
  // file uploding service
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("App write service :: file upload :: error", error);
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("app write :: delete file :: error", error);
      return false;
    }
  }
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId
    )
  }
}

const service = new Service();
export default service;
