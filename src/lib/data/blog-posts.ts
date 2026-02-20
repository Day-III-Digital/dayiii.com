export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	date: string;
	tags: string[];
}

export const blogPosts: BlogPost[] = [
	{
		slug: 'unreal-engine-5-nanite-optimization',
		title: 'Optimizing Nanite for Production',
		excerpt: 'Deep dive into Nanite optimization techniques for real-time performance in large-scale environments.',
		date: '2026-01-02',
		tags: ['Unreal Engine 5', 'Nanite', 'Optimization'],
		content: `
# Optimizing Nanite for Production

Nanite is one of Unreal Engine 5's most revolutionary features, but deploying it in production requires careful optimization strategies. In this post, we'll explore practical techniques we've developed while working on AAA titles.

## Understanding Nanite's Performance Profile

Nanite works by virtualizing geometry, streaming and rendering only what's visible at the appropriate level of detail. However, this comes with its own performance characteristics that differ from traditional LOD systems.

### Key Considerations

1. **Triangle Density**: While Nanite can handle extreme triangle counts, the initial load and streaming costs still matter
2. **Material Complexity**: Complex materials can become bottlenecks even with optimized geometry
3. **Overdraw**: Nanite doesn't solve pixel overdraw issues

## Production Techniques

Through our work with several studios, we've identified these critical optimization strategies:

### 1. Smart Asset Preparation
- Keep source meshes clean and optimized
- Use appropriate texture resolutions
- Balance between Nanite and traditional meshes for dynamic objects

### 2. Streaming Configuration
- Fine-tune streaming pool sizes for your target platform
- Monitor streaming requests and adjust priorities
- Consider network bandwidth for multiplayer titles

### 3. Material Optimization
- Keep shader complexity in check
- Use material instances extensively
- Profile pixel cost regularly

## Conclusion

Nanite is incredibly powerful, but it's not magic. Understanding its strengths and limitations is key to shipping performant titles. We've seen 40-60% frame time improvements in some scenes by applying these techniques.

Stay tuned for our next post on Lumen optimization strategies.
		`
	},
	{
		slug: 'procedural-content-generation-ue5',
		title: 'PCG in UE5: Building Scalable Worlds',
		excerpt: 'How we leverage Procedural Content Generation to create massive, detailed environments efficiently.',
		date: '2025-12-15',
		tags: ['PCG', 'Technical Art', 'Level Design'],
		content: `
# PCG in UE5: Building Scalable Worlds

Procedural Content Generation (PCG) in Unreal Engine 5 has transformed how we approach large-scale environment creation. Here's what we've learned building open worlds with PCG.

## Why PCG?

Traditional hand-placed asset workflows don't scale for modern open-world games. PCG offers:

- **Efficiency**: Generate vast landscapes in minutes
- **Iteration**: Rapid prototyping and art direction changes
- **Consistency**: Rule-based placement ensures quality
- **Memory**: Efficient runtime generation

## Our PCG Pipeline

We've developed a modular PCG framework that handles:

1. **Biome Definition**: Rule-based ecosystem generation
2. **Asset Scattering**: Intelligent prop placement with variation
3. **Path Generation**: Road and trail networks
4. **LOD Management**: Automatic detail scaling

## Best Practices

### Keep It Deterministic
Use seeded random generation so environments are reproducible. This is crucial for debugging and team collaboration.

### Layer Your Rules
Build complexity through simple, composable rules rather than monolithic generators.

### Profile Early
PCG can be expensive. Profile generation costs and optimize hot paths.

## Real-World Results

On our latest project, PCG reduced environment art time by 60% while increasing visual variety. The key is finding the right balance between procedural generation and artist control.
		`
	},
	{
		slug: 'custom-shader-development-unreal',
		title: 'Custom Shader Development in Unreal Engine',
		excerpt: 'A technical guide to writing custom HLSL shaders and integrating them with Unreal\'s material system.',
		date: '2025-11-20',
		tags: ['Shaders', 'HLSL', 'Materials'],
		content: `
# Custom Shader Development in Unreal Engine

While Unreal's material editor is powerful, sometimes you need to drop down to HLSL for specialized effects. Here's our approach to custom shader development.

## When to Write Custom Shaders

Custom HLSL is warranted when you need:
- Performance optimization for specific effects
- Access to hardware features not exposed in material editor
- Complex mathematical operations
- Integration with external rendering systems

## Integration Methods

### Custom Nodes
The quickest path for simple operations. Good for prototyping and one-off effects.

### Material Functions
Reusable shader code wrapped in blueprint-accessible nodes. Our preferred method for team collaboration.

### Plugin Development
Full control over rendering pipeline. Required for complex systems.

## Example: Custom Vertex Animation

Here's a snippet from our procedural wind system:

\`\`\`hlsl
float3 CalculateWindOffset(float3 WorldPos, float Time) {
    float2 windDirection = float2(1.0, 0.5);
    float windSpeed = 2.0;
    float windStrength = 0.3;
    
    float wave = sin(dot(WorldPos.xy, windDirection) * 0.1 + Time * windSpeed);
    return float3(windDirection * wave * windStrength, 0);
}
\`\`\`

## Performance Considerations

Custom shaders must be optimized carefully:
- Minimize texture samples
- Use appropriate precision (half vs float)
- Consider platform-specific limitations
- Profile on target hardware

## Conclusion

Custom shaders are a powerful tool in the technical artist's arsenal. Used judiciously, they can unlock unique visual effects and significant performance gains.
		`
	}
];

export function getPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find(post => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
	return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
