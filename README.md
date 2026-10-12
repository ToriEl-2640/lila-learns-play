# Lila Learns Play

MASTER APP DEVELOPMENT PROMPT: LILA — THE INTERACTIVE LEARNING WORLD FOR CHILDREN



1. PROJECT OVERVIEW



Act as a senior mobile application developer, child-learning experience designer, UI/UX designer, AI engineer, educational content creator, and child-safety specialist.



Build Lila, an interactive, age-adaptive educational mobile application for children aged 0–12 years.



Lila should make learning feel like play. The app combines interactive Show & Tell activities, narrated stories, educational games, songs, sensory experiences, creative challenges, and carefully controlled AI-powered learning assistance.



The experience should feel like entering a friendly animated world where children learn alongside Lila, a lovable young Black girl, and her adorable purple bunny teddy.



Primary platform: Android.



Development approach: Build the application using React Native and Expo, with JavaScript. It must be possible to develop, test, and maintain the app using GitHub Codespaces and a Samsung Android phone, without requiring a personal computer.



Product vision: Create a safe, visually delightful, accessible, and genuinely educational companion that grows with children from infancy to preteen years.



Do not build only a static UI mockup. Build a functional application with working navigation, interactive learning activities, age-based content, sound controls, progress tracking, and a foundation for secure AI integration.



If a feature requires external services or credentials that are not available, create a working placeholder and clearly document what is needed to complete it. Never pretend an unimplemented feature is functional.



---



2. BRAND IDENTITY AND CHARACTERS



Main character: Lila



Use the supplied Lila reference image as the authoritative character reference.



Preserve her recognizable identity:



- A cute, friendly Black girl.

- Large, expressive brown eyes.

- Soft, curly dark hair.

- A peach-and-lilac bow.

- A cheerful, welcoming expression.

- A contemporary, child-friendly appearance.

- Lavender, lilac, peach, and complementary pastel clothing.

- A warm personality that encourages curiosity and discovery.



Lila should feel consistent across the entire application. Do not randomly change her face, hairstyle, skin tone, signature bow, or overall character design.



Lila's teddy



Use the supplied purple bunny teddy as Lila's companion.



The bunny should:



- Appear in selected screens, stories, games, and celebrations.

- Help demonstrate activities.

- React to correct answers, discoveries, and story moments.

- Have recognizable proportions and a consistent purple appearance.

- Support the learning experience without competing with Lila for attention.



Visual direction



Use a polished, soft, animated 3D-inspired aesthetic.



The interface should feel like a high-quality children's learning product rather than a generic school application.



Design principles:



- Rounded cards and friendly buttons.

- Soft shadows and subtle depth.

- Pastel lavender, purple, peach, sky blue, white, and occasional mint accents.

- Large illustrations.

- Clear, readable typography.

- Simple navigation and generous spacing.

- Gentle animations and delightful micro-interactions.

- Clear contrast for text and controls.

- Age-appropriate visual complexity.



Suggested brand palette:



- Primary purple: #8B5CF6

- Deep purple: #6D28D9

- Lavender: #EDE9FE

- Peach: #FFC6B0

- Sky blue: #BAE6FD

- Soft white: #FFFCFF

- Mint: #BBF7D0

- Dark text: #302642



Use the colors consistently, but prioritize readability and accessibility over decoration.



Use the supplied character artwork as an image asset initially. If a fully animated 3D model is unavailable, create a polished illustrated or layered character experience first. Do not claim that a static image is a fully animated 3D character.



---



3. AGE-BASED LEARNING SYSTEM



Create separate experiences for five age groups.



A. Baby World: 0–12 months



Purpose: Encourage caregiver-guided sensory exploration and early interaction.



Activities:



- High-contrast visual cards.

- Gentle moving shapes.

- Slow visual tracking.

- Soft, short musical cues.

- Familiar animal and everyday sounds.

- Parent-guided naming of objects.

- Simple reaching and grasping activity suggestions.

- Supervised tummy-time activity suggestions.

- Caregiver-and-baby interaction prompts.



Design:



- Minimal distractions.

- Large visual elements.

- Gentle transitions.

- No rapid flashing, strobing, or overwhelming effects.

- Short activities and prominent parent guidance.



The app must never encourage leaving a baby unattended with a device or using the app as a substitute for responsive caregiver interaction.



B. Toddler World: 1–3 years



Purpose: Develop early vocabulary, recognition, listening, and simple problem-solving.



Activities:



- Learn colors.

- Identify shapes.

- Name familiar objects.

- Animal names and sounds.

- First words.

- Everyday greetings.

- Simple matching games.

- Sorting by color or shape.

- Counting small groups.

- Familiar food and clothing recognition.

- Songs and action-based learning.

- Simple emotional recognition.



Interaction style:



- Large tap targets.

- One simple instruction at a time.

- Short spoken phrases.

- Friendly repetition.

- Encouragement for exploration rather than pressure to get everything right.



C. Preschool World: 3–5 years



Purpose: Build foundational literacy, numeracy, language, creativity, and social-emotional skills.



Activities:



- Alphabet recognition.

- Beginning phonics.

- Letter-to-sound matching.

- Numbers and counting.

- Basic addition using visual objects.

- Colors, patterns, and shapes.

- Vocabulary building.

- Everyday object exploration.

- Story comprehension.

- Feelings and empathy.

- Hygiene and routines.

- Memory and matching games.

- Creative drawing and categorization.

- Listening and following instructions.



D. Explorer World: 6–8 years



Purpose: Develop early independent learning and reasoning.



Activities:



- Reading practice.

- Spelling and vocabulary.

- Sentence construction.

- Reading comprehension.

- Addition, subtraction, and introductory multiplication.

- Basic science concepts.

- Nature and animal classification.

- Logic puzzles.

- Pattern recognition.

- Memory challenges.

- Creative storytelling.

- Everyday financial literacy, such as needs versus wants and simple saving.

- Beginner problem-solving missions.



E. Big Thinkers World: 9–12 years



Purpose: Encourage deeper reasoning, comprehension, creativity, and independent thinking.



Activities:



- Reading comprehension.

- Grammar and writing challenges.

- Mathematics practice.

- Fractions and introductory percentages.

- Scientific exploration.

- Environmental awareness.

- Digital literacy and online safety.

- Financial literacy.

- Logic and critical-thinking puzzles.

- Research and observation missions.

- Creative writing.

- Beginner coding concepts.

- Planning and decision-making activities.

- Age-appropriate real-world problem-solving projects.



Do not make the older children's section look like a toddler application. Keep the Lila identity while using more sophisticated layouts, challenges, illustrations, and language for older users.



The parent should be able to select or update the child's age range. Do not collect a child's full birth date unless there is a clearly justified need.



---



4. FIRST-TIME USER EXPERIENCE



Build a friendly onboarding sequence.



Screen 1: Welcome to Lila



Display Lila and her purple bunny teddy.



Headline: "Big discoveries start with little questions!"



Supporting text: "Explore, play, listen, and learn with Lila."



Buttons:



- Let's Begin

- Grown-ups' Area



Screen 2: Choose Your Learning World



Show five illustrated cards:



- Baby World

- Toddler World

- Preschool World

- Explorer World

- Big Thinkers World



Each card should display its recommended age range and a brief description.



Screen 3: Personalize the Experience



Allow a parent or caregiver to choose:



- Learning interests.

- Preferred narration language, if available.

- Sound on or off.

- Captions on or off.

- Session reminders.

- Accessibility preferences.



Do not require children to enter personal information.



Screen 4: Meet Lila and Her Bunny



Introduce the characters with a short, optional animation or illustrated sequence.



Lila welcomes the child, and the bunny responds with a friendly gesture.



Provide a skip button.



Screen 5: Enter the Learning World



Open the age-appropriate home screen.



Store only the minimum settings needed for the app to function. Allow parents to change them later.



---



5. HOME SCREEN



Design a personalized home screen with Lila as the main visual focus.



Include:



- A friendly greeting from Lila.

- Lila's character artwork and bunny companion.

- A "Continue Learning" card.

- A "Today's Discovery" card.

- An age-appropriate featured activity.

- Progress or completed activities, where appropriate.

- Clear navigation to the core learning sections.



Main learning sections:



1. Show & Tell

2. Lila's Little Stories

3. Play & Learn

4. Songs & Greetings

5. Baby Sensory World, shown where appropriate

6. Creative Corner

7. Grown-ups' Area



Only show sections appropriate to the selected age. Baby-specific features must not appear as the default experience for older children.



Do not overwhelm the home screen with too many cards. Prioritize the next useful activity.



---



6. FEATURE ONE: SHOW & TELL WITH LILA



This is one of the app's signature features.



Create an interactive discovery experience in which Lila introduces familiar objects and helps children understand what they are, what they look like, and how they are used.



Content categories



- Fruits and vegetables.

- Food and kitchen objects.

- Animals.

- Toys.

- Clothing.

- Household objects.

- School supplies.

- Transportation.

- Nature.

- Body parts.

- Everyday tools and objects.



Example experience: The Apple



1. Lila appears beside a large illustration of an apple.

2. The app says, "Hello! Today we're learning about an apple."

3. The child taps a speaker button to hear the word.

4. Lila explains: "An apple is a fruit. It can be red, green, or yellow."

5. The child can tap the illustration to reveal an additional fact or hear the word again.

6. Lila asks an age-appropriate question.



For toddlers: "What is this?"



For preschoolers: "Which color is the apple?"



For ages 6–8: "Name two things you notice about the apple."



For ages 9–12: "Describe how an apple grows and why it is a fruit."



7. The child selects an answer or responds through an optional supported interaction.

8. Lila provides encouraging feedback.

9. The app offers another question, a related object, or a short activity.



Interaction requirements



- Audio pronunciation for key words.

- Optional narration.

- Captions or displayed text.

- Replay buttons.

- Clear illustrations.

- Age-adaptive questions.

- Optional caregiver participation.

- A simple "Next Discovery" button.

- A way to repeat an activity without penalty.



Use curated, reviewed educational content as the default. Do not rely on unrestricted AI generation for basic facts presented to children.



---



7. FEATURE TWO: LILA'S LITTLE STORIES



Create a story library featuring original, age-appropriate stories.



Story themes



- Kindness.

- Honesty.

- Friendship.

- Patience.

- Sharing.

- Courage.

- Curiosity.

- Respect.

- Caring for nature.

- Problem-solving.

- Understanding emotions.

- Family and community.

- Trying again after making a mistake.



Story screen



Include:



- Story cover illustration.

- Story title.

- Recommended age range.

- Estimated reading time.

- Read-to-me mode.

- Read-by-myself mode where appropriate.

- Play and pause narration controls.

- Captions or story text.

- Previous and next page controls.

- Bookmark or favorite option.

- A short comprehension activity.



Example original story concept



Title: "Lila and the Missing Blue Crayon"



Lila and her bunny are preparing a colorful picture. They cannot find the blue crayon. Instead of blaming anyone, Lila looks carefully, asks for help, and discovers that the crayon has rolled under a table.



The story teaches patience, asking for help, and solving problems calmly.



At the end, ask age-appropriate questions about what happened and what the characters learned.



Create a small starter library of original stories. Clearly separate reviewed, published stories from drafts generated with AI.



Never reproduce copyrighted stories or characters from other children's media.



---



8. FEATURE THREE: PLAY & LEARN



Create a library of interactive mini-games.



Each game must have a clear learning objective, age range, instructions, feedback, and a restart option.



Game A: Color Explorer



Children identify colors in objects.



Examples:



- Tap the red apple.

- Find the blue ball.

- Match the yellow star.



Game B: Shape Safari



Identify and match circles, squares, triangles, rectangles, and more advanced shapes for older children.



Game C: Number Garden



Count illustrated flowers, fruits, toys, or animals.



Progress to simple arithmetic for older children.



Game D: Letter Land



Introduce letter recognition and, where developmentally appropriate, phonics.



Use clear pronunciation and age-appropriate examples.



Game E: Memory Match



Match pairs of cards featuring animals, shapes, objects, letters, or other age-appropriate content.



Game F: Animal Detective



Identify animals from illustrations, sounds, habitats, and clues.



Game G: Pattern Builder



Complete patterns using shapes, colors, numbers, or symbols.



Game H: Story Sequencer



Arrange illustrated events in the correct order.



Game I: Feelings Finder



Help children recognize emotions from facial expressions and simple scenarios.



Encourage children to name feelings without labeling an emotion as inherently bad.



Game J: Logic Lab



Create age-adjusted puzzles, classification tasks, and reasoning challenges for older children.



Game mechanics



- Tap, drag, match, sort, or select answers.

- Use large touch targets.

- Provide immediate, gentle feedback.

- Offer hints when appropriate.

- Include replay and pause options.

- Track completion without shaming children.

- Use short rounds.

- Avoid manipulative streaks, pressure timers, or punitive scoring.



Reward curiosity, effort, and persistence—not just speed.



---



9. FEATURE FOUR: SONGS, GREETINGS & EVERYDAY WORDS



Create a section for language development, social interaction, and everyday routines.



Include:



- Greetings.

- Saying please and thank you.

- Introducing oneself without sharing private details.

- Asking for help.

- Naming feelings.

- Everyday household vocabulary.

- Hygiene routines.

- Getting ready for school.

- Bedtime routines.

- Respectful communication.

- Age-appropriate songs and musical listening activities.



Provide:



- Play and pause controls.

- Repeat-word controls.

- Captions where possible.

- Short, original songs and musical cues.

- Gentle sound design.

- A sound-off mode.



Use original music and lyrics or properly licensed audio. Do not copy copyrighted songs or recordings.



---



10. FEATURE FIVE: BABY SENSORY WORLD



Display this feature primarily in Baby World.



Include:



- High-contrast visual cards.

- Simple, slowly moving shapes.

- Gentle animal illustrations.

- Soft musical cues.

- Familiar sounds.

- Visual tracking activities.

- Caregiver-guided naming activities.

- Reaching and grasping suggestions.

- Supervised tummy-time suggestions.

- Simple interaction prompts for parents.



Provide a prominent caregiver note explaining that the app supports interaction and does not replace responsive caregiving.



Keep the interface calm. Avoid flashing lights, rapid visual movement, startling sounds, or prolonged autoplay.



---



11. FEATURE SIX: CREATIVE CORNER



Build an area where children can create and explore.



Possible activities:



- Color a picture.

- Decorate an illustration.

- Complete a drawing prompt.

- Create a simple story from approved picture cards.

- Design a pattern.

- Match colors to objects.

- Solve a creative building challenge.

- Draw an animal or a favorite object.



Use a simple drawing canvas if feasible.



For a first version, prioritize safe, local creative activities rather than public sharing or social networking.



Do not automatically publish children's artwork or allow public profiles.



---



12. LILA'S PERSONALITY AND INTERACTIONS



Lila should be warm, curious, encouraging, playful, and age-appropriate.



Example phrases:



- "Let's discover something new!"

- "What do you notice?"

- "Good thinking!"

- "Would you like a hint?"

- "Let's try another way."

- "You can take your time."

- "What do you think will happen next?"



Lila should not shame children for wrong answers or make them feel that mistakes mean failure.



For babies and toddlers, use short, simple phrases.



For preschoolers, use encouraging explanations.



For older children, use thoughtful questions that promote reasoning.



Use a curated library of character responses for common interactions. Do not make the character pretend to have real-world experiences, feelings, or a human relationship with the child.



If a child provides an unexpected or unclear answer, respond safely and encourage another attempt or caregiver assistance.



---



13. AI-POWERED LEARNING FEATURES



Integrate AI carefully to improve personalization without making the app dependent on unrestricted conversations.



AI Feature A: Adaptive Learning



Use activity performance and completed tasks to recommend suitable next activities.



For example:



- If a child repeatedly struggles with a concept, offer an easier example.

- If the child demonstrates understanding, introduce a slightly more challenging task.

- Recommend related content based on selected learning interests.



Use transparent, understandable learning rules. Do not diagnose developmental conditions or make unsupported claims about a child's intelligence or abilities.



AI Feature B: Safe Question Generator



Generate supplementary questions from approved educational content.



Example input:



- Age group: 3–5.

- Activity: Show & Tell.

- Topic: Apple.

- Learning objective: Vocabulary.

- Difficulty: Beginner.



Expected output:



- A short, accurate question.

- A small set of appropriate answer choices.

- A brief explanation.

- A friendly, non-punitive response.



Validate generated questions and answers before displaying them.



AI Feature C: Story Personalization



Allow parents to choose safe story themes such as animals, friendship, nature, or space.



AI may produce a draft based on approved templates and age guidelines. Only reviewed stories should enter the general child-facing library unless a separate safe, constrained generation process is implemented and tested.



AI Feature D: Parent Learning Assistant



Provide an optional assistant for parents and caregivers.



It may:



- Explain what an activity is designed to teach.

- Suggest caregiver-child conversation prompts.

- Recommend related activities.

- Summarize completed learning activities.

- Suggest ways to practice a concept away from the screen.



It must not diagnose a child's health, developmental status, or learning disability.



AI safety architecture



- Never place private AI provider keys in the mobile application.

- Route AI requests through a secure backend.

- Apply input and output moderation.

- Use age-specific system instructions and constrained output formats.

- Use curated content as the fallback when AI is unavailable.

- Set request limits and reasonable cost controls.

- Avoid retaining children's raw voice recordings.

- Do not send identifying child information to AI providers.

- Do not expose an unrestricted chatbot to young children.

- Do not allow the AI to generate arbitrary links, external actions, or purchase requests.

- Clearly document which features use AI.



The app must remain useful even when the AI service is offline.



---



14. PARENT AND CAREGIVER DASHBOARD



Create a separate, clearly labeled Grown-ups' Area.



Protect sensitive settings using an age-appropriate parent gate. Do not rely on a simple math question as the only protection for sensitive account or purchase actions.



Include:



- Selected age group.

- Learning interests.

- Completed activities.

- Concepts explored.

- Parent-selected goals.

- Session duration settings.

- Sound and caption settings.

- Narration preferences.

- Downloaded content management.

- Privacy settings.

- Account settings, if accounts are implemented.

- Data export and deletion options where applicable.

- Subscription and purchase controls, if later introduced.

- Explanations of AI use and data handling.



Progress summaries should describe activities and concepts explored. Do not present them as clinical developmental assessments.



Do not introduce subscriptions, ads, or purchases in the initial child-facing experience.



---



15. LEARNING PROGRESS AND PERSONALIZATION



Track learning progress using a simple, privacy-conscious data model.



Possible fields:



- Selected age band.

- Activity identifier.

- Activity completion status.

- Concept identifier.

- Number of attempts, where useful.

- Optional parent-selected learning goal.

- Last activity date, if needed.



Avoid collecting unnecessary information.



Use the progress data to:



- Suggest a next activity.

- Avoid repeating the same activity excessively.

- Provide parent-friendly summaries.

- Adjust difficulty within safe limits.

- Celebrate learning milestones.



Do not use public leaderboards or compare children with other users.



For the initial prototype, store preferences and progress locally. Introduce cloud synchronization only after authentication, access controls, privacy policies, and secure database rules are implemented.



---



16. NAVIGATION AND SCREEN STRUCTURE



Implement a consistent navigation system with the following screens:



1. Welcome.

2. Age selection.

3. Personalization.

4. Meet Lila.

5. Home.

6. Show & Tell category selection.

7. Show & Tell activity.

8. Story library.

9. Story reader.

10. Game library.

11. Individual game.

12. Songs and greetings.

13. Baby Sensory World.

14. Creative Corner.

15. Learning progress.

16. Grown-ups' Area.

17. Settings.

18. Privacy and AI information.

19. Offline or error state.



Use clear back navigation. Ensure that activities do not unexpectedly reset when the user moves between screens.



Use appropriate Android system navigation behavior.



---



17. TECHNICAL ARCHITECTURE



Mobile application



Use:



- React Native.

- Expo.

- JavaScript.

- React Navigation or an appropriate Expo-compatible navigation solution.

- Expo-compatible audio and local-storage packages.

- Reusable UI components.

- A clear content data structure.

- Local assets for character illustrations and educational content.



Prefer stable, maintained packages that work with the selected Expo SDK.



Do not add large dependencies without a clear reason.



Suggested folder structure



Organize the code into clear modules:



- "assets/" — Lila artwork, bunny artwork, icons, and audio.

- "src/components/" — reusable buttons, cards, progress indicators, and character displays.

- "src/screens/" — onboarding, home, activities, stories, games, and parent settings.

- "src/navigation/" — application navigation.

- "src/data/" — reviewed learning content, questions, stories, and activities.

- "src/features/show-and-tell/" — discovery activity logic.

- "src/features/stories/" — story reader and story library.

- "src/features/games/" — mini-game logic.

- "src/features/progress/" — local progress tracking.

- "src/services/" — audio, storage, and future backend services.

- "src/theme/" — colors, typography, spacing, and design tokens.

- "src/utils/" — reusable helper functions.



Adapt the structure as appropriate, but keep code maintainable.



Optional backend



When necessary, use a secure backend for:



- Parent accounts.

- Cross-device synchronization.

- Approved AI requests.

- Content management.

- Optional backups.



Supabase may be considered for authentication and database storage, but only implement it after defining appropriate access controls and row-level security.



Never expose service-role credentials in the app.



Offline support



The core learning experience should work offline wherever possible.



Include a starter set of:



- Show & Tell items.

- Stories.

- Mini-games.

- Images.

- Essential text content.



Make network-dependent features optional and display clear messages when they are unavailable.



---



18. CHILD SAFETY, PRIVACY, AND ACCESSIBILITY



Treat child safety as a foundational requirement, not an optional enhancement.



Implement these principles:



- No public child profiles.

- No child-to-child direct messaging.

- No public chat rooms.

- No location tracking.

- No personalized advertising.

- No unnecessary collection of personal information.

- Microphone and camera permissions off until explicitly needed and parent-approved.

- No default retention of raw voice recordings.

- No external links accessible directly from the child experience.

- Parent controls for purchases, account management, and sensitive settings.

- Clear privacy information.

- A reliable way for parents to manage or delete stored data.

- Secure authentication and backend access controls if accounts are added.

- Captions and accessible controls.

- Readable text and suitable contrast.

- Support for sound-off use.

- Respectful error handling.

- No manipulative notifications or pressure-based reward systems.



Before release, review applicable child-privacy laws and current Google Play Families requirements for the intended countries and audience. Do not claim compliance until the app has actually been reviewed and tested against the relevant requirements.



---



19. PERFORMANCE AND DESIGN QUALITY



The app must be suitable for ordinary Android devices, including devices with limited memory and unreliable internet connections.



Requirements:



- Responsive layouts for different Android screen sizes.

- Fast startup.

- Optimized images and audio.

- Smooth but restrained animations.

- No unnecessary background processing.

- Clear loading, error, and offline states.

- Large touch targets for young children.

- Graceful handling of interrupted audio and navigation.

- No buttons that appear functional but do nothing.

- No placeholder text left in completed features without explanation.



Keep the first version lightweight. Do not attempt to build every advanced feature before the basic learning journey works.



---



20. DEVELOPMENT MILESTONES



Build the app in the following phases.



Phase 1: Functional prototype



Implement:



- Welcome screen.

- Age selection.

- Age-based home screen.

- Lila and bunny artwork.

- Working navigation.

- Show & Tell with several sample objects.

- One simple mini-game.

- One original illustrated story.

- Audio replay controls or working audio placeholders.

- Basic local settings and progress.



The prototype must run on a physical Android phone through Expo Go where supported.



Phase 2: Core learning content



Add:



- More reviewed Show & Tell objects.

- Additional stories.

- More mini-games.

- Age-appropriate content filtering.

- Narration and captions.

- Baby Sensory World.

- Creative Corner.

- Parent dashboard.



Phase 3: Polish and accessibility



Add:



- Better transitions.

- Consistent illustrations.

- Character reactions.

- Improved responsive layouts.

- Accessibility improvements.

- Performance optimization.

- Offline behavior.

- Testing across different screen sizes.



Phase 4: Secure AI features



Add:



- Backend AI endpoint.

- Safe question generation.

- Adaptive recommendations.

- Parent learning assistant.

- Moderation and validation.

- Request limits.

- AI failure fallback.

- Privacy controls and testing.



Phase 5: Production preparation



Prepare:



- App icon.

- Launch screen.

- Android package configuration.

- Privacy policy and appropriate disclosures.

- Required permissions.

- Testing and crash fixes.

- Production Android build.

- Google Play listing assets.

- Review of current Google Play Families requirements.



Do not claim that the application is published or production-ready until the required work has been completed.



---



21. ACCEPTANCE TESTS



The application is not complete until the following basic tests pass:



1. The app launches successfully on an Android device.

2. The user can select an age group.

3. The home screen displays appropriate age-specific activities.

4. The user can open and complete a Show & Tell activity.

5. The app displays a question and provides appropriate feedback.

6. The user can open and finish a simple mini-game.

7. The user can open and navigate an illustrated story.

8. Audio controls respond correctly, where audio is implemented.

9. Sound-off mode works.

10. The user can navigate back without unexpected crashes.

11. Progress updates correctly when an activity is completed.

12. Settings persist where intended.

13. The app displays a useful message when a network-dependent feature is unavailable.

14. The child-facing experience contains no unrestricted AI chat.

15. Parent-only settings are not casually accessible to young children.

16. The app does not collect unnecessary personal information.

17. The application remains usable on a typical Android phone.

18. The developer can run the project from GitHub Codespaces using the documented commands.



---



22. INSTRUCTIONS TO THE AI CODING AGENT



Work incrementally. Do not try to generate the entire application in one enormous, untested code dump.



First inspect the existing repository and preserve the supplied Lila and bunny artwork.



Then:



1. Explain the current project structure briefly.

2. Check the installed Node.js version, package manager, and Expo configuration.

3. Identify any missing files or dependencies.

4. Build the first working prototype.

5. Create each file with complete, executable code.

6. Use reusable components rather than duplicating screens.

7. Run the available linting, type, or runtime checks.

8. Fix errors before proceeding.

9. Clearly identify anything that cannot be tested in the current environment.

10. Give simple, exact instructions for opening and testing the app on a Samsung Android phone.

11. Document required commands, environment variables, and any backend setup.

12. Never expose API keys or secrets.

13. Keep the app runnable after each milestone.



For each development phase, report:



- What has been implemented.

- Which files were created or changed.

- Which commands were run.

- Whether tests passed.

- What remains unfinished.

- The exact next step.



Use plain language in the development instructions because the app owner may be working from a phone rather than a computer.



Start now with Phase 1. Prioritize a real, working Android learning experience featuring Lila, age selection, Show & Tell, one mini-game, and one story. Make it beautiful, functional, safe, and easy to expand. Do not build advanced AI features until the core application works reliably.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://lila-learns-play.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3a855c66-588c-4817-93bd-ef9bcb46c0e0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
