let BookData = [
    {
        id: 1,
        title: "Soul",
        author: "Oliva Wilson",
        coverimage: "https://th.bing.com/th/id/OIP.S2iQNfkMuGH3nGkIVoy0sQHaHa?rs=1&pid=ImgDetMain",
        aboutBook: "'Heir to the Gift' follows a young protagonist discovering unique abilities amidst political intrigue. The story explores themes of destiny and self-acceptance as they navigate their path. It's a captivating tale set in a richly imagined world.",
        category: "Fantasy",
        rating: 4.5
    },
    {
        id: 2,
        title: "A Million To One",
        author: "Tony Faggioli",
        coverimage: "https://th.bing.com/th/id/OIP.ihuAAcm8cbAFYGp5CML7VAAAAA?w=115&h=180&c=7&r=0&o=5&pid=1.7",
        aboutBook: "A Million to One by J. M. Hush follows Mia, a young woman striving to become a renowned artist. The narrative delves into her journey of resilience and passion in a competitive art world. It emphasizes the transformative power of art and self-belief.",
        category: "Drama Triller",
        rating: 4.2
    },
    {
        id: 3,
        title: "Walk into The Shadow",
        author: "Estelle Darcy",
        coverimage: "https://th.bing.com/th/id/OIP.PDCH0h7bEKxtO2t5LFclEAAAAA?w=203&h=304&c=7&r=0&o=5&pid=1.7",
        aboutBook: "Walk into the Shadow by L. M. Krier features detective Jenna investigating mysterious disappearances linked to dark secrets. As she delves deeper, Jenna confronts her own past. The novel explores themes of fear, redemption, and the quest for truth.",
        category: "Mystery Horror",
        rating: 4.6
    },
    {
        id: 4,
        title: "Harry Potter",
        author: "J. K. Rowling",
        coverimage: "https://th.bing.com/th/id/OIP.v4CVoD5fPcZC4EPQeKoc_QHaLL?w=203&h=307&c=7&r=0&o=5&pid=1.7",
        aboutBook: "The Harry Potter series follows a young wizard navigating life at Hogwarts while battling dark forces. Themes of friendship, bravery, and the struggle between good and evil are central to the story. It's a beloved tale that captivates readers worldwide.",
        category: "Fantasy Thriller",
        rating: 4.9
    },
    {
        id: 5,
        title: "The Boy Tiger's Heart",
        author: "Linda Coggin",
        coverimage: "https://i.pinimg.com/736x/4d/0d/fe/4d0dfed66979c0c801fb448889bd49a9.jpg",
        aboutBook: "The Boy Tiger's Heart tells the story of a young boy discovering his unique connection with tigers. This enchanting tale explores themes of courage and friendship. It invites readers into a world of magic and self-discovery.",
        category: "Fantasy Adventure",
        rating: 4.3
    },
    {
        id: 6,
        title: "Alone",
        author: "Morgan Maxwell",
        coverimage: "https://th.bing.com/th/id/OIP.KAjkN2dlNhe-RGdLAI-3TgHaKi?rs=1&pid=ImgDetMain",
        aboutBook: "Alone explores loneliness and self-discovery as a young woman navigates isolation in a bustling world. The narrative delves into her inner thoughts while seeking connection and purpose. It's a reflective journey that resonates with many.",
        category: "Drama Thriller Non-Fiction",
        rating: 4.0
    },
    {
        id: 7,
        title: "My Book Cover",
        author: "Book Publisher",
        coverimage: "https://th.bing.com/th/id/OIP.1DSIj9qHFXac3l-G2_QhRwHaLH?rs=1&pid=ImgDetMain",
        aboutBook: "'My Book Cover' is an imaginative exploration of creativity through art. It invites readers to reflect on their artistic journeys while celebrating individuality. This book serves as inspiration for aspiring artists.",
        category: "Art Non-Fiction",
        rating: 3.9
    },
    {
        id: 8,
        title: "The Light Behind the Garden Wall",
        author: "Scott WhiteHead",
        coverimage: "https://th.bing.com/th/id/OIP.bA5NttvTwwOWVByP4-PnZgHaJ4?rs=1&pid=ImgDetMain",
        aboutBook: "The Light Behind the Garden Wall intertwines fantasy with reality as characters discover hidden worlds beyond their own. Themes of curiosity and friendship are woven throughout this enchanting narrative. It encourages readers to explore their imaginations.",
        category: "Fantasy Adventure",
        rating: 4.4
    },
    {
        id: 9,
        title: "The Outer Space",
        author: "Kimbery Hopkins",
        coverimage: "https://th.bing.com/th/id/OIP.egyGU9VFOmuwZfWh7XJA3QHaL0?rs=1&pid=ImgDetMain",
        aboutBook: "The Outer Space takes readers on an interstellar adventure filled with exploration and discovery. This science fiction tale blends action with profound questions about existence. It's a thrilling journey beyond imagination.",
        category: "Science Fiction",
        rating: 4.5
    },
    {
        id: 10,
        title: "Heir to the Gift",
        author: "Johnthan Sud",
        coverimage: "https://th.bing.com/th/id/OIP.ZlyPduc9LiVHXV9XALVlBQHaLa?rs=1&pid=ImgDetMain",
        aboutBook: "'Heir to the Gift' follows a young protagonist discovering unique abilities amidst political intrigue. The story explores themes of destiny and self-acceptance as they navigate their path. It's a captivating tale set in a richly imagined world.",
        category: "Fantasy Mystery",
        rating: 4.6
    },
    {
        id: 11,
        title: "The Whispering Woods",
        author: "Ella Harper",
        coverimage: "https://th.bing.com/th/id/OIP.1DSIj9qHFXac3l-G2_QhRwHaLH?rs=1&pid=ImgDetMain",
        aboutBook: "In 'The Whispering Woods,' a young girl discovers a hidden realm filled with mystical creatures. As she forms alliances and faces challenges, she learns the importance of courage and friendship in overcoming adversity.",
        category: "Fantasy Adventure",
        rating: 4.3
    },
    {
        id: 12,
        title: "Echoes of the Past",
        author: "Liam Carter",
        coverimage: "https://th.bing.com/th/id/OIP.bA5NttvTwwOWVByP4-PnZgHaJ4?rs=1&pid=ImgDetMain",
        aboutBook: "'Echoes of the Past' follows a historian unraveling family secrets through ancient letters. This emotional journey explores themes of legacy, love, and the impact of history on our present lives.",
        category: "Historical Fiction",
        rating: 4.2
    },
    {
        id: 13,
        title: "The Celestial Map",
        author: "Sofia Martinez",
        coverimage: "https://th.bing.com/th/id/OIP.egyGU9VFOmuwZfWh7XJA3QHaL0?rs=1&pid=ImgDetMain",
        aboutBook: "In 'The Celestial Map,' a young astronomer embarks on an adventure to decode an ancient star map. The story blends science with fantasy as she discovers her place in the universe.",
        category: "Science Fiction Fantasy",
        rating: 4.4
    },
    {
        id: 14,
        title: "Beneath the Surface",
        author: "Oliver Stone",
        coverimage: "https://th.bing.com/th/id/OIP.ZlyPduc9LiVHXV9XALVlBQHaLa?rs=1&pid=ImgDetMain",
        aboutBook: "'Beneath the Surface' tells the story of a marine biologist uncovering secrets of the ocean. As she battles environmental challenges, she learns about resilience and the interconnectedness of life.",
        category: "Adventure Drama",
        rating: 4.1
    },
    {
        id: 15,
        title: "The Clockmaker's Daughter",
        author: "Clara Evans",
        coverimage: "https://th.bing.com/th/id/OIP.S2iQNfkMuGH3nGkIVoy0sQHaHa?rs=1&pid=ImgDetMain",
        aboutBook: "'The Clockmaker's Daughter' is a tale of mystery and magic revolving around a young girl who discovers her father's hidden past. As she uncovers secrets, she learns about love, loss, and the power of time.",
        category: "Mystery Fantasy",
        rating: 4.7
    }
];

export default BookData