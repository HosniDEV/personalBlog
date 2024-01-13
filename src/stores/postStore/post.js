import { defineStore } from "pinia";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";
export const usePostStore = defineStore("post", {
  //states
  state: () => ({
    articles: [],
    paginations: [],
    current_page: 1,
    article: {},
    isLoading: false,
    polularArticles: [],
    randomCategories: [],
  }),
  getters: {},
  actions: {
    // get simple date
    getSimpleDate(dateTimeString) {
      const dateObj = new Date(dateTimeString);
      // Format the date as "MMM DD - YYYY"
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        month: "short", // Short month name (e.g., "Jan")
        day: "2-digit", // Two-digit day of the month (e.g., "08")
        year: "numeric", // Full year (e.g., "2000")
      });
      return formattedDate;
    },
    // all posts
    async getArticles(current_page) {
      try {
        current_page = this.current_page;
        this.isLoading = true;
        const response = await axios.get("/posts?page=" + current_page);
        const res = await response.data;
        this.articles = res.data;

        this.last_page = res.last_page;

        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },

    async paginate(page) {
      if (page !== this.current_page) this.current_page = page;
      await this.getArticles(page);
    },
    // Popular Articles
    async getPopularArticles() {
      try {
        this.isLoading = true;
        const response = await axios.get("/randomPost");
        this.polularArticles = await response.data;

        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },

    // get post by unique category
    async getUiqueArticleCategory() {
      try {
        this.isLoading = true;
        const response = await axios.get("/randomCategories");
        this.randomCategories = await response.data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
    // get single post
    async getArticle(slug) {
      try {
        this.isLoading = true;
        const response = await axios.get("/post/" + slug);
        this.article = await response.data;

        this.isLoading = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
