<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/Button.svelte';

	const slug = $derived($page.params.slug);

	// News data - would ideally come from a CMS or database
	const newsData: Record<string, any> = {
		'mpa-committee-first-quarter': {
			date: '2024-12-15',
			category: 'Project Update',
			title: 'MPA Committee Successfully Completes First Quarter',
			image: '/images/news/committee.jpg',
			content: `
				<p>Three months into the Marine Protected Area (MPA) initiative, the 15-member community committee has established strong foundations for long-term success. Meeting monthly in rotating village locations, the committee brings together traditional leaders, youth representatives, and women's voices to guide the protection of Raja Ampat's marine resources.</p>

				<h2>Key Achievements</h2>
				<p>The committee has made significant progress across several critical areas:</p>

				<ul>
					<li><strong>Patrol Protocols:</strong> Developed comprehensive guidelines for community-led marine patrols, including scheduling, reporting mechanisms, and protocols for addressing violations</li>
					<li><strong>Benefit-Sharing Framework:</strong> Established transparent mechanisms for distributing tourism fees and other revenues across participating villages</li>
					<li><strong>Monitoring Standards:</strong> Standardized reef monitoring protocols across all 15 survey sites to ensure consistent data collection</li>
					<li><strong>Conflict Resolution:</strong> Created culturally-appropriate procedures for addressing disputes over marine resources and boundaries</li>
				</ul>

				<h2>Building Consensus</h2>
				<p>Perhaps most remarkably, the committee has achieved strong consensus across villages with historically different approaches to marine management. "We are stronger together than separate," notes committee chair Martha Rumakabes. "The fish don't know village boundaries, so our protection cannot either."</p>

				<p>This unity has been particularly evident in discussions about enforcement. Rather than rely on external authorities, the committee has emphasized community-based accountability rooted in traditional <em>sasi</em> systems of resource management.</p>

				<h2>Looking Ahead</h2>
				<p>The committee's next phase will focus on:</p>
				<ul>
					<li>Launching the first coordinated patrol series across the MPA</li>
					<li>Establishing a community fund for sustainable livelihood alternatives</li>
					<li>Developing educational materials for schools about marine conservation</li>
					<li>Engaging with district government officials on formal MPA designation</li>
				</ul>

				<p>With participation rates exceeding 90% at monthly meetings and strong engagement from all demographic groups, the committee provides a model for community-driven conservation that respects indigenous governance while building capacity for long-term stewardship.</p>
			`
		},
		'baseline-survey-results': {
			date: '2024-11-20',
			category: 'Science',
			title: 'Baseline Survey Results Published',
			image: '/images/news/survey.jpg',
			content: `
				<p>After six months of comprehensive underwater surveys, the baseline reef health assessment has been completed across all 15 monitoring sites in the proposed Marine Protected Area. The results provide critical benchmarks for measuring the effectiveness of community conservation efforts over the coming years.</p>

				<h2>Survey Methodology</h2>
				<p>The assessment utilized internationally-standardized Reef Check protocols, with surveys conducted by trained community members working alongside marine biologists. Each site was surveyed along 100-meter transects at depths of 3 meters and 10 meters, documenting:</p>

				<ul>
					<li>Coral cover and composition by species</li>
					<li>Fish abundance and diversity across functional groups</li>
					<li>Presence of indicator species (sharks, groupers, napoleon wrasse)</li>
					<li>Signs of coral disease, bleaching, or physical damage</li>
					<li>Invertebrate populations (sea cucumbers, giant clams, sea urchins)</li>
				</ul>

				<h2>Key Findings</h2>
				<p><strong>Coral Health:</strong> Average live coral cover stands at 42% across all sites, ranging from 28% to 61%. This places the area in the "fair" to "good" category by international standards, with significant room for improvement through protection.</p>

				<p><strong>Fish Populations:</strong> Species richness averaged 187 species per site, indicating high biodiversity. However, biomass of large predatory fish was 60% below expected levels for pristine reefs, suggesting historical overfishing pressure.</p>

				<p><strong>Target Species:</strong> Surveys documented encouraging populations of reef sharks (spotted at 73% of sites), though Napoleon wrasse were only observed at 2 sites. Giant clams showed promising abundance in areas with traditional sasi protections.</p>

				<p><strong>Coral Recruitment:</strong> High densities of juvenile corals (12-15 recruits per m²) suggest strong reproductive potential and capacity for recovery if pressures are reduced.</p>

				<h2>Regional Context</h2>
				<p>Compared to other Bird's Head Seascape monitoring sites, the survey area shows:</p>
				<ul>
					<li>Above-average coral diversity (312 species documented)</li>
					<li>Below-average large fish biomass (indicating fishing pressure)</li>
					<li>Excellent water quality with minimal signs of pollution</li>
					<li>Low incidence of coral disease (less than 1% of colonies affected)</li>
				</ul>

				<h2>Implications for Management</h2>
				<p>The baseline data reveals an ecosystem with strong fundamentals—high coral and fish diversity, good water quality, and intact reef structure—but showing clear signs of fishing pressure on larger species. This makes it an ideal candidate for community-based protection:</p>

				<ul>
					<li>The ecosystem is healthy enough to recover quickly with reduced pressure</li>
					<li>Key spawning aggregation sites have been identified for targeted protection</li>
					<li>Juvenile coral abundance suggests rapid potential for coral cover increases</li>
					<li>Threatened species like Napoleon wrasse can be specifically monitored</li>
				</ul>

				<p>All monitoring data has been shared with the MPA committee and participating communities, providing them with scientific evidence to guide management decisions. Annual resurveys will track changes in these metrics, allowing the community to see the direct results of their conservation efforts.</p>

				<p>The full technical report is available for researchers and can be requested through our <a href="/contact">contact page</a>.</p>
			`
		},
		'reef-check-training': {
			date: '2024-10-08',
			category: 'Community',
			title: '12 Community Members Complete Reef Check Training',
			image: '/images/news/training.jpg',
			content: `
				<p>In a significant milestone for local capacity building, twelve community members from five villages have completed intensive training in Reef Check monitoring protocols. This certification represents a major step toward community ownership of the scientific monitoring that will track the health of the Marine Protected Area.</p>

				<h2>Training Program</h2>
				<p>The three-week program, led by Reef Check International instructors and Conservation International staff, combined classroom learning with extensive dive training:</p>

				<ul>
					<li><strong>Week 1:</strong> Coral and fish identification, survey methodology, data recording techniques</li>
					<li><strong>Week 2:</strong> Practice surveys on training reefs, underwater communication, quality control procedures</li>
					<li><strong>Week 3:</strong> Independent surveys on actual monitoring sites, data entry and analysis, report writing</li>
				</ul>

				<p>All participants completed a minimum of 15 training dives and demonstrated proficiency in identifying 200+ species of fish and 50+ coral types. The program maintained the same rigorous standards used for international Reef Check certifications.</p>

				<h2>Building Local Expertise</h2>
				<p>"Before, we needed to bring scientists from outside to tell us about our own reefs," reflects Yosep Kabes, one of the newly certified surveyors. "Now we have the knowledge and skills to monitor these waters ourselves. This is our ocean, and now we can document what is happening in it."</p>

				<p>The cohort includes:</p>
				<ul>
					<li>3 traditional fishers with decades of local ecological knowledge</li>
					<li>4 dive guides from local homestay operations</li>
					<li>3 youth representatives interested in marine science careers</li>
					<li>2 women's group leaders committed to environmental education</li>
				</ul>

				<h2>From Training to Implementation</h2>
				<p>The certified surveyors immediately put their new skills into action, conducting the baseline reef assessment across all 15 monitoring sites over the following six weeks. Working in teams of three to four, they collected the comprehensive data that now provides benchmarks for measuring conservation success.</p>

				<p>Their work demonstrated that community-collected data can meet rigorous scientific standards. Inter-observer agreement rates exceeded 85% for all key metrics, matching the quality of data collected by professional marine biologists.</p>

				<h2>Long-Term Capacity</h2>
				<p>Beyond the immediate monitoring needs, the training program has created lasting benefits for the communities:</p>

				<ul>
					<li><strong>Income Opportunities:</strong> Certified surveyors can now offer professional monitoring services to tourism operators and research institutions</li>
					<li><strong>Science Education:</strong> Trainees are teaching reef ecology in local schools, inspiring the next generation</li>
					<li><strong>Tourism Enhancement:</strong> Dive guides with scientific knowledge can provide richer educational experiences for visitors</li>
					<li><strong>Data Sovereignty:</strong> Communities now control the scientific narrative about their own marine resources</li>
				</ul>

				<h2>Expanding the Network</h2>
				<p>Plans are underway for a second training cohort in 2025, aiming to certify at least two surveyors from each of the ten participating villages. This will create a robust monitoring network capable of conducting quarterly surveys across the entire MPA without external support.</p>

				<p>Several trainees have also expressed interest in advanced training in coral restoration techniques, underwater photography, and marine education program development. These specialized skills will further enhance community capacity for marine stewardship and sustainable livelihoods.</p>
			`
		},
		'community-consensus': {
			date: '2024-09-15',
			category: 'Milestone',
			title: 'Strong Community Consensus Achieved',
			image: '/images/news/consensus.jpg',
			content: `
				<p>After nine months of extensive consultations following Free, Prior and Informed Consent (FPIC) principles, communities across the proposed Marine Protected Area have reached strong consensus in support of establishing formal protections for their marine resources. This milestone represents the culmination of careful relationship-building and reflects genuine community ownership of the conservation initiative.</p>

				<h2>The FPIC Process</h2>
				<p>Rather than presenting a predetermined plan, the project team engaged in deep listening across more than 10 villages, asking communities to articulate their own concerns, priorities, and visions for their marine resources. The process included:</p>

				<ul>
					<li>Initial meetings with traditional leaders (<em>raja</em> and <em>kepala suku</em>) to seek permission and guidance</li>
					<li>Gender-separated focus groups to ensure women's voices were heard alongside men's</li>
					<li>Youth consultations to incorporate perspectives of future stewards</li>
					<li>Presentations to village governing councils for formal community decisions</li>
					<li>Multiple rounds of consultations as the proposal evolved based on community input</li>
				</ul>

				<h2>Key Themes from Consultations</h2>
				<p>Several consistent themes emerged across communities:</p>

				<p><strong>Concerns About Declining Fish:</strong> Every community noted significant decreases in fish catches over recent decades, with larger species becoming increasingly rare. Many elders recalled times when Napoleon wrasse, groupers, and sharks were commonly seen close to shore.</p>

				<p><strong>Outside Fishing Pressure:</strong> Communities expressed frustration about boats from other regions fishing in their waters without permission, undermining local conservation efforts.</p>

				<p><strong>Youth Opportunities:</strong> Parents and youth consistently raised concerns about limited livelihood options, leading young people to leave for cities. Interest was high in careers related to conservation, tourism, and marine stewardship.</p>

				<p><strong>Cultural Continuity:</strong> Traditional leaders emphasized wanting to pass healthy reefs to future generations, viewing marine protection as aligned with customary responsibilities rather than imposed from outside.</p>

				<h2>Community-Defined Boundaries</h2>
				<p>Rather than using biological or administrative boundaries, the proposed MPA follows boundaries defined by communities based on traditional use rights and sacred sites. This required extensive negotiation to resolve overlapping claims and historical disputes—work that communities led themselves with facilitation support.</p>

				<p>The resulting boundaries reflect both ecological and cultural considerations:</p>
				<ul>
					<li>Critical spawning aggregation sites identified by traditional fisher knowledge</li>
					<li>Sacred sites where customary restrictions already limit access</li>
					<li>Tourism diving areas where communities see economic benefits from protection</li>
					<li>Traditional fishing grounds where communities want to see recovery</li>
				</ul>

				<h2>Governance Framework</h2>
				<p>Communities insisted that management decisions rest with local people rather than external authorities. The resulting governance structure centers on the 15-member community committee, with representation from each participating village.</p>

				<p>Traditional institutions retain authority to enforce customary law within the MPA, while the committee provides coordination across villages and interface with government agencies. This hybrid approach respects indigenous sovereignty while building capacity for landscape-scale management.</p>

				<h2>Formal Endorsements</h2>
				<p>By September 2024, formal endorsements had been secured from:</p>
				<ul>
					<li>10 village governing councils (unanimous decisions)</li>
					<li>Traditional leader councils representing 15+ clan leaders</li>
					<li>Women's groups from each participating village</li>
					<li>Youth councils expressing support and commitment to participate</li>
					<li>Local church organizations (important given Christianity's role in community life)</li>
				</ul>

				<p>These endorsements were documented in village meeting minutes and formal letters of support, creating a clear record of community mandate for the MPA.</p>

				<h2>From Consensus to Action</h2>
				<p>With community consensus established, the initiative moved into implementation phase:</p>
				<ul>
					<li>Formation of the MPA management committee</li>
					<li>Baseline reef monitoring to document starting conditions</li>
					<li>Development of patrol and enforcement protocols</li>
					<li>Engagement with district government on formal legal designation</li>
				</ul>

				<p>This consensus-building process took longer than a top-down approach would have, but created genuine community ownership that will sustain the MPA through inevitable future challenges. As one traditional leader stated: "This is not a foreign project happening to us. This is our decision to protect what belongs to our children and grandchildren."</p>
			`
		}
	};

	const post = newsData[slug];

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
	}
</script>

{#if post}
	<article class="blog-post">
		<div class="post-hero">
			<div class="post-hero__container">
				<div class="post-meta">
					<span class="post-category">{post.category}</span>
					<time datetime={post.date}>{formatDate(post.date)}</time>
				</div>
				<h1 class="post-title">{post.title}</h1>
			</div>
		</div>

		<div class="post-content">
			<div class="content-container">
				<div class="post-image">
					<div class="image-placeholder">
						<div class="category-badge">{post.category}</div>
					</div>
				</div>

				<div class="post-body">
					{@html post.content}
				</div>

				<div class="post-footer">

					<div class="post-navigation">
						<a href="/news" class="back-link">
							← Back to All Posts
						</a>
					</div>
				</div>
			</div>
		</div>

		<section class="related-cta">
			<div class="content-container">
				<div class="cta-box">
					<div class="section-label">[ GET INVOLVED ]</div>
					<h2>Support Community-Led Conservation</h2>
					<p>Your support helps communities protect Raja Ampat's marine resources for future generations.</p>
					<Button href="/get-involved" variant="primary" size="lg">Learn How to Help</Button>
				</div>
			</div>
		</section>
	</article>
{:else}
	<div class="not-found">
		<div class="content-container">
			<h1>Post Not Found</h1>
			<p>Sorry, we couldn't find the blog post you're looking for.</p>
			<a href="/news" class="back-link">← Back to All Posts</a>
		</div>
	</div>
{/if}

<style>
	.post-hero {
		background: var(--color-forest-green-deep);
		padding: clamp(10rem, 15vh, 14rem) 0 clamp(4rem, 8vh, 6rem);
		position: relative;
	}

	.post-hero::before {
		content: '';
		position: absolute;
		inset: 0;
		opacity: 0.03;
		background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 1px);
		background-size: 40px 40px;
	}

	.post-hero__container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
		position: relative;
		z-index: 1;
	}

	.post-meta {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		margin-bottom: var(--spacing-lg);
		font-size: var(--font-size-sm);
	}

	.post-category {
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		padding: var(--spacing-xs) var(--spacing-md);
		border-radius: 4px;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.post-meta time {
		color: rgba(255, 255, 255, 0.8);
	}

	.post-title {
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 700;
		line-height: 1.2;
		color: var(--color-off-white);
		margin: 0;
	}

	.post-content {
		padding: clamp(4rem, 8vh, 6rem) 0;
		background: var(--color-off-white);
	}

	.content-container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 var(--spacing-xl);
	}

	.post-image {
		margin-bottom: var(--spacing-3xl);
		border-radius: 12px;
		overflow: hidden;
	}

	.image-placeholder {
		background: linear-gradient(135deg, var(--color-forest-green-deep) 0%, var(--color-forest-green) 100%);
		aspect-ratio: 16 / 9;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.category-badge {
		background: var(--color-burnt-orange);
		color: var(--color-off-white);
		padding: var(--spacing-sm) var(--spacing-lg);
		border-radius: 4px;
		font-size: var(--font-size-base);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.post-body {
		font-size: var(--font-size-lg);
		line-height: 1.8;
		color: var(--color-charcoal);
	}

	.post-body :global(h2) {
		font-size: var(--font-size-2xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-top: var(--spacing-3xl);
		margin-bottom: var(--spacing-lg);
		line-height: 1.3;
	}

	.post-body :global(h3) {
		font-size: var(--font-size-xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-top: var(--spacing-2xl);
		margin-bottom: var(--spacing-md);
	}

	.post-body :global(p) {
		margin-bottom: var(--spacing-lg);
	}

	.post-body :global(ul) {
		margin-bottom: var(--spacing-lg);
		padding-left: var(--spacing-xl);
	}

	.post-body :global(li) {
		margin-bottom: var(--spacing-sm);
	}

	.post-body :global(strong) {
		color: var(--color-charcoal);
		font-weight: 600;
	}

	.post-body :global(em) {
		font-style: italic;
		color: var(--color-gray);
	}

	.post-body :global(a) {
		color: var(--color-burnt-orange);
		text-decoration: none;
		border-bottom: 1px solid var(--color-burnt-orange);
		transition: color 0.2s ease;
	}

	.post-body :global(a:hover) {
		color: var(--color-charcoal);
	}

	.post-footer {
		margin-top: clamp(4rem, 8vh, 6rem);
		padding-top: var(--spacing-3xl);
		border-top: 2px solid var(--color-light-gray);
	}


	.post-navigation {
		text-align: center;
	}

	.back-link {
		display: inline-flex;
		align-items: center;
		color: var(--color-burnt-orange);
		text-decoration: none;
		font-weight: 500;
		font-size: var(--font-size-lg);
		transition: color 0.2s ease;
	}

	.back-link:hover {
		color: var(--color-charcoal);
	}

	.related-cta {
		background: var(--color-cream);
		padding: clamp(4rem, 8vh, 6rem) 0;
	}

	.cta-box {
		background: var(--color-off-white);
		padding: clamp(3rem, 6vh, 5rem) var(--spacing-2xl);
		border-radius: 12px;
		text-align: center;
		box-shadow: var(--shadow-md);
	}

	.cta-box h2 {
		font-size: var(--font-size-2xl);
		font-weight: 600;
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-md);
	}

	.cta-box p {
		font-size: var(--font-size-lg);
		line-height: 1.6;
		color: var(--color-gray);
		max-width: 600px;
		margin: 0 auto var(--spacing-xl);
	}

	.not-found {
		min-height: 60vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: var(--spacing-3xl) 0;
	}

	.not-found h1 {
		font-size: var(--font-size-3xl);
		color: var(--color-charcoal);
		margin-bottom: var(--spacing-md);
	}

	.not-found p {
		font-size: var(--font-size-lg);
		color: var(--color-gray);
		margin-bottom: var(--spacing-xl);
	}

	@media (min-width: 768px) {
		.post-body {
			font-size: 1.125rem;
		}
	}
</style>
