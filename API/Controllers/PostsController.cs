using System.Linq;
using API.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly IPostService _postService;
        public PostsController(IPostService postService)
        {
            _postService = postService;
        }

        [HttpGet]
        public IActionResult List()
        {
            var posts = _postService.GetAllPosts();
            return Ok(posts);
        }

        [HttpGet("{id}")]
        public IActionResult Detail(int id)
        {
            var post = _postService.GetAllPosts().FirstOrDefault(x => x.Id == id);
            return Ok(post);
        }
    }
}