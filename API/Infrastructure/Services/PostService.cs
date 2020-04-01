using System.Collections.Generic;
using API.Core.Entities;
using API.Core.Interfaces;
using System.IO;
using System.Text.Json;
using System;
using System.Reflection;

namespace API.Infrastructure.Services
{
    public class PostService : IPostService
    {
        public IEnumerable<Post> GetAllPosts()
        {
            try
            {
                var path = Directory.GetCurrentDirectory();
                var postData = File.ReadAllText("Infrastructure/Data/Posts.json");
                var posts = JsonSerializer.Deserialize<List<Post>>(postData);
                return posts;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}