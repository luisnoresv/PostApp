
namespace API.Core.Entities
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string DisplayName { get; set; }
        public string UserName { get; set; }
        public string PhotoUrl { get; set; }
        public string PostedOn { get; set; }
    }
}