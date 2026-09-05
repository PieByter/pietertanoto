export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    content: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "spring-boot-rest-api",
        title: "Building a Scalable REST API with Spring Boot",
        excerpt:
            "A practical look at structuring a Spring Boot API with layered architecture, DTOs, validation, and clean error handling.",
        date: "Aug 2026",
        readTime: "5 min read",
        tags: ["Java", "Spring Boot", "Backend"],
        content: [
            "When I started building backend services, the biggest mistake I made was putting everything in one giant controller. It works for a demo, but as soon as the API grows, it becomes a nightmare to maintain. The fix is a clear layered architecture: Controller → Service → Repository.",
            "Controllers should only handle HTTP concerns — parsing requests, validating input, and returning responses. All business logic belongs in the service layer, and data access stays in repositories. This separation makes your code testable and lets you swap implementations without touching the API surface.",
            "Another habit I swear by is using DTOs instead of exposing entities directly. Entities carry persistence concerns (lazy loading, internal fields) that should never leak to the client. Map entities to DTOs at the boundary, and your API contract stays stable even when the database schema changes.",
            "Finally, don't forget global exception handling. A single @RestControllerAdvice that maps exceptions to consistent error responses saves hours of debugging for frontend teams — and makes your API feel professional.",
        ],
    },
    {
        slug: "testing-early",
        title: "Why I Write Tests Early: Lessons from Production",
        excerpt:
            "Testing isn't a phase at the end — it's a design tool. Here's how writing tests early made my code better and my releases calmer.",
        date: "Jul 2026",
        readTime: "4 min read",
        tags: ["Testing", "Quality", "Backend"],
        content: [
            "For a long time I treated tests as something to write after the feature was 'done'. The result? Tests that only covered happy paths, and bugs that appeared exactly where I didn't test. Writing tests early changed everything.",
            "When you write a test before the implementation, you're forced to think about the contract first: what goes in, what comes out, and what happens on failure. That single shift catches design problems while they're still cheap to fix.",
            "In my internship at BPJS Ketenagakerjaan, embedding testing early meant the AI chatbot features I built could be verified quickly against edge cases — empty inputs, unexpected formats, slow responses. It gave the team confidence to ship.",
            "My advice: start with the critical paths, keep tests fast, and treat the test suite as documentation. Future-you (and your teammates) will thank you.",
        ],
    },
    {
        slug: "kotlin-java-journey",
        title: "From Android to Backend: My Journey with Kotlin & Java",
        excerpt:
            "How building Android apps with Kotlin made me a better backend developer — and why the two worlds overlap more than you'd think.",
        date: "Jun 2026",
        readTime: "6 min read",
        tags: ["Kotlin", "Java", "Career"],
        content: [
            "I started my developer journey on Android with Kotlin, building apps like a recommendation app during Bangkit Academy. At first, backend felt like a completely different world — but the core skills transferred surprisingly well.",
            "Android taught me to think about lifecycle, state, and concurrency. Those same concerns exist on the server: request lifecycles, connection pools, and thread safety. Understanding coroutines on Android made me comfortable with reactive patterns in Spring Boot.",
            "Java and Kotlin share the JVM, so moving between them is natural. The discipline of writing clean, testable mobile code — small functions, clear boundaries, dependency injection — maps directly to building reliable APIs.",
            "If you're a mobile developer curious about backend, don't wait. Build a tiny REST API, deploy it, and watch how your mobile instincts make you a better engineer on both sides.",
        ],
    },
    {
        slug: "nextjs-vercel-deploy",
        title: "Deploying a Next.js Portfolio on Vercel",
        excerpt:
            "The exact steps I used to ship this very website — from local dev to a live URL with automatic deployments on every push.",
        date: "May 2026",
        readTime: "4 min read",
        tags: ["Next.js", "Vercel", "DevOps"],
        content: [
            "This portfolio runs on Next.js and is deployed on Vercel. The setup is surprisingly simple: push to GitHub, and Vercel builds and deploys automatically. No servers to manage, no SSH, no Dockerfiles needed for a project like this.",
            "The key files are next.config.ts for build settings and the app/ directory for routing. I use the App Router with client components for interactive sections like the terminal and chat widget, while keeping the page itself fast with static rendering.",
            "One tip: set your environment variables (like API keys) in the Vercel dashboard, not in your repository. Vercel injects them at build time, so secrets never end up in git history.",
            "For a personal site, this workflow means I can focus on content and design instead of infrastructure — and every commit is a potential deployment.",
        ],
    },
];