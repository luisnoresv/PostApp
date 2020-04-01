using System.Collections.Generic;
using API.Core.Entities;

namespace API.Core.Interfaces
{
    public interface IPostService
    {
        IEnumerable<Post> GetAllPosts();
    }
}