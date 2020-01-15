---
title: Research
date: 2020-01-14 17:02:00
---

# Research

## Target Platform Research

### Introduction
There are two main classifications of VR gear for which we can develop as target platforms for:
- Standalone VR gear.

- PC-backed or Android/iOS-backed (Connected) VR gear.

We consider both classifications as potential target platforms:
- Standalone VR gear representative: Oculus Go [1].
- Connected VR gear representative: Google Cardboard [2].

### Platforms and Graphics Development Options

#### Oculus Go
Oculus Go, as a standalone VR gear, has 3 development possibilities [3]:
Native development with Native Platform [4].
Unreal development with Unreal Integration [5].
Unity development with Unity Integration [6].

#### Native Development with Mobile SDK and Native Platform
The Mobile SDK / Native Platform for native development contains [4]:
- VrApi for third-party engine integration (not required for Unity or Unreal).
- Native application framework for building high-performance VR applications from scratch.
- Additional libraries providing support for GUI, locale, and other functionality.
- Native project sample applications and source to provide reference model for creating your own VR applications.
- Tools and resources to assist with native development.
Main development language is in Android (Java), with additional C++ [4].

#### Unreal Development
Unreal Engine 4 is a Graphics Engine developed by Epic Games, Inc [5].
Oculus Go has support for Unreal integration [6].
Main development language is in C++ [6].

#### Unity Development
Unity is a Graphics Engine developed by Unity Technologies [7].
Oculus Go has support for Unity integration [8].
Main development language is in C# or JavaScript [8].
Cross-platform development support is available [9].

#### Google Cardboard
Google Cardboard VR gear is a simple viewer, with the rendering and processing occuring on the connected mobile device 
[2].
The supported mobile operating systems for the Cardboard SDK is [10]:
Android via Android NDK (in Java) [11].
iOS SDK (in Objective-C) [12].

#### Decision on Target Platform
We evaluated the two representative VR head gears in target platform research and considered two options:
1. Target only Oculus Go.
    * Less development time.
    * Lower learning curve.
    * Maybe too bound to the particular platform, making code reuses difficult.
    * Estimated cost: low.
2. Target both Oculus Go and Google Cardboard.
    * Forces us to consider VR head gear abstractions - i.e. forces the incorporation of some HAL (hardware abstraction 
    layer).
    * Long development time (potentially double).
    * Google Cardboard depends on Android or iOS phone, which are two additional environments that we may have to 
    consider - an OSAL (operating system abstraction layer) will likely be needed in that case.
    * Estimated cost: high.
    
Based on the development time constraint, we initially decide to only develop for the Oculus Go as the single target 
platform. We should keep in mind that other platforms may be necessary to port to, and that some abstractions may need
 to be put in place to facade over platform-specific details.
 
 
### More on Oculus Go

Oculus Go is a standalone VR headset, meaning that it does not require processing and rendering support from 
connected devices[13].
 
Each Oculus Go set(minimum, 32 GB, GBP 199) contains[13]:
1. Oculus Go Headset.
2. Controller.
3. 10W Power Adapter.
4. AA battery.
5. Frame Friendly Spacer.

#### Hardware specification

From[14],[15]:
1. 5.5-inch display
2. 2560 x 1440 resolution (1280 x 1440 per eye)
3. Qualcomm’s Snapdragon 821 processor [16]:
* Four Kryo cores running at 2.15 – 2.3 GHz
* Adreno 530 GPU with ~500 GFLOPS performance
* 64-bit LPDDR4 memory, 14LPP
4. $199 base model includes 32GB of storage
5. 3 GB of RAM
6. 802.11ac Wi-Fi
7. 60 – 72 Hz refresh rate (application dependent)
8. 3.5-mm audio jack, integrated spatial audio with speakers built-in
9. 3-degree-of-freedom tracking (3DoF) for the headset and the controller, but does not support positional tracking at 
all
10. 2600 mAh battery that provides up to two hours of gaming, or 2.5 hours of video playback

### Related Solution Research

#### Abstract
By conducting research on existing (and similar) products / solutions in the market will provide us with an insight of 
their strengths and weaknesses, to help us further develop our solution. We first enumerate three similar VR Meeting 
solutions: MeetinVR [17], Microsoft HoloLens 2 [18] and Doghead Simulations' rumii [19]. We develop an analysis 
criteria to evaluate each of the similar solutions, and then give a summative analysis of the common weaknesses and 
strengths of the three similar solutions.
 
#### Major Similar Solutions
1. MeetinVR
* MeetinVR is a company that integrates software and hardware to provide an interactive VR space that allows companies to
conduct powerful meetings. By using a combination of VR goggles and a pair of handset, it can provide each user with a
unique avatar capable of performing realistic movements in the virtual environment. However, it is still under 
development and not yet open to commercial use [17].

2. Microsoft HoloLens 2
* The new Microsoft HoloLens 2 uses a mixed reality headset that is semi transparent (similar to wearing a pair of 
sunglasses), not as immersive compared to the conventional VR goggles. However, it is more powerful in many ways [18].

3. Doghead Simulations’ rumii
* This company offers a VR platform suitable for business conferencing and collaboration for training and education. 
It is capable of paring the user’s laptop, mobile phones, desktop with the Oculus VR goggles, making document sharing 
even more convenient [19].
 
 
#### Analysis Criteria
1. Outstanding feature. 
* What makes this company’s product unique and stand out from its competition.

2. Hardware and Software requirements:
* In order to use this company’s product, which pieces of hardware are needed.

3. Target Users:
* Who is(are) the company’s main target user group(s).

4. Price:
* How much does the product cost?

5. Strengths and Weaknesses.
* Can our VR Meeting Environment solution address existing flaws in these similar solutions, or further improve on 
their strengths?
 
 
#### Similar Solution Analysis
We analyze each major similar solution according to the analysis criteria previously specified.

1. MeetinVR

Strong points:
* very interactive, 360 degrees rotation
* allows the user to be focused in the VR space
* has audio systems built in to the headset, allowing real time communication
* a variety of features such as sharing documents display images, videos, personalised avatar..
* 3D modelling inside their VR space
* easy to learn how to use
* name tags on each avatar so users know who they are talking to

2. Microsoft HoloLens 2

Strong points:
* the device recognises the user when he/she puts on the headset and automatically signs them in, makes the user feel 
more personal, capable of facial recognition
* doesn't rely on additional hand held devices to track movements, the headset has cameras that recognises the user’ 
hands and fingers to provide high accuracy movement.
* responsive to user’s actions, such as clicking a virtual button
* Voice recognition that follows spoken commands
* display searched results in a manageable way that allow users to modify and select what they want
* additional features such as commanding an opened window to follow the user as they walk around
* personalised avatars
* realtime communication

Weak points:
* very expensive
* target customers are large enterprises (not suitable for small businesses)
* without the use of hand held hardware, certain actions such as “grabbing” may become less responsive
* Not bright enough, difficult for the user to see certain figures in the VR space
 
3. Doghead Simulations’ rumii

Strengths:
* Personalized avatar with name tags so users are identifiable.
* Support 3D modelling in the virtual space.
* Provides a variety of meeting background.
* Supports real-time communication.
* Users may create public or private rooms.
* Can use screen share to display the contents of the user’s laptop to a “big screen” inside the VR space.
* Users may establish geographical servers for better connectivity.

#### Summary Analysis

In order to address the issues within online meetings, such as lack of engagements, difficulties in sharing documents 
and lack of efficiencies in giving out online presentations, the three existing competitors had turned their solutions 
to VR.
The research showed that they all share some common features: name tags above the user’s avatars, personalized avatar, 
360 degrees of rotation, movements, document and presentation sharing, and real-time communication. Name tags and 
personalized avatar gives the users an identity in this virtual space that makes them feel personal and allow users to 
quickly identify each other. 360 degrees of rotation and movements performed by the avatars are features designed to 
keep the participants engaged throughout their virtual meetings, as it creates an immersive experience. Functions such 
as documents and presentation distribution are vital to conduct an efficient meeting. Real-time communication with 
audio and sound systems is fundamental to ensure that the whole VR experience is engaging and immersive.
Two out of the three solutions researched uses a combination of headset with VR lenses and handheld controllers to 
create the VR meeting experience. Microsoft HoloLens 2 on the contrary only uses a headset with built in cameras that 
capture the user’s surroundings and preforms body language recognition.
 
 
 
### Graphics Rendering Engine Research

#### Background
Oculus Go supports three types of graphics rendering options [20]:
1. Native Engine Integration with VrApi [21].
2. Unity integration.
3. Unreal integration.

#### Relevant Data
Each of the option inevitably bounds us to a programming language, or a particular graphics rendering engine, which may 
affect portability and extensibility.
1. Native Engine Integration with VrApi requires native C++, which is particular to Oculus Go.
2. Unity integration requires C#.
3. Unreal integration requires C++.
C++ is compiled, but Native Engine integration and Unreal integration each requires that we be bound to the particular 
API specific to Oculus Go, meaning that the code is difficult to use should additional platforms need to be supported. 
We likely need different build configurations for different platforms as well.
C# is JIT compiled, similar to Java, where source files are compiled to a intermediate language and then executed by a 
JIT compiler on the target platform. This likely reduces the different build setup required, with the caveat that 
platforms need to implement C# JIT compiler run time [22].

#### Options considered
1. Option1: VrApi
Oculus Go’s native SDK provides VrApi which utilizes Android-based custom graphics rendering engine [23].
* Not bound to external graphics engine.
* Minimal API.
* Has some examples.
* Limited graphics rendering capabilities.
* Likely needs to roll out custom graphics rendering algorithms.
* C++ has a high learning curve.
* Difficult to port to another platform.
* Estimated development cost: High.

2. Option2: Unreal
Oculus Go provides Unreal engine integration [24].
* High performance, engine written in C++ and optimized.
* Good community resources, documentation and examples.
* C++ has a high learning curve.
* Dependent on the game engine.
* May have unneeded features which can bloat binary size.
* May have compatibility problems.
* Payment scheme: 5% of revenue.
* Estimated development cost: Medium.

3. Option3: Unity
Oculus Go provides Unity engine integration [25].
* Mature game engine, optimized.
* C# is similar to Java, which team members are familiar with.
* Very good community resources, documentation and examples.
* Lots of getting started tutorials exist.
* Target platforms need to implement C# JIT compiler run time.
* Game engine may have features which we don’t need.
* Dependent on the game engine.
* Free
* Estimated development cost: Medium.


#### Evaluation
Given the development time constraint, it did not seem likely that we have enough time to roll out custom graphics 
rendering capabilities via the native VrApi, which is the first option we ruled out.
We then needed to decide between Unreal vs Unity, based on the following considerations.
1. Programming Language
Unreal uses C++ whereas Unity uses C#. C# is similar to Java, which all three of the team members are familiar with, 
meaning that Unity will have a lower learning barrier in terms of host language. In this aspect, Unity is the better 
choice.

2. Builds and Platform Portability
C++ compilation occurs on the development machine, which means that codegen for different target platforms need only be 
implemented on the development machine’s OS. However, different build configurations will need to be maintained.
C# compilation occurs by JIT compilers on the target platform, where the development machine only produces intermediate 
code which is transferred to the target platform.
In this case, if different VR head gears need to be supported, C++ (and hence Unreal) would be the better choice 
because not every VR head gear implements C# JIT compiler run time.
However, as we decided to develop for only one target platform for the prototype given the time constraints, C# (and 
hence Unity) is sufficient.

3. Learning Difficulty
None of the team members have prior VR / C++ / Graphics Rendering / Game Engine experience, so we need to pick a game 
engine which is faster to learn.
Based on discussions in [26] and [27], Unreal is more suited for high-end, realistic-graphics-rendering 3D games which 
require high processing power, while Unity is more suited for lower-end, reasonable-graphics-rendering 3D or 2D games 
which are primarily deployed on mobile platforms. Unreal development usually requires a sophisticated team with 
graphics rendering specialists, while Unity is more suited towards less-experienced developers of a smaller team size.
In this sense, Unity is more suitable for us.

#### Outcome
Based on programming language, building and platform portability, and mostly importantly, learning difficulty, we 
decide to use Unity for the VR Meeting Room.


### Real-time Voice Chat Research
TODO

### Reference
[1] “Oculus Go Development,” Oculus Developer Center. [Online]. Available: https://developer.oculus.com/go/. 
[Accessed: 15-Nov-2019].

[2] “Google Cardboard,” Google Cardboard – Google VR. [Online]. Available: https://arvr.google.com/cardboard/. 
[Accessed: 15-Nov-2019].

[3] “Choose Your Development Environment  |  Cardboard  |  Google Developers,” Google. [Online]. 
Available: https://developers.google.com/cardboard/develop. [Accessed: 15-Nov-2019].

[4] “Mobile SDK Getting Started Guide,” Oculus Developer Center. [Online]. 
Available: https://developer.oculus.com/documentation/mobilesdk/latest/concepts/book-intro/. [Accessed: 15-Nov-2019].

[5] “Unreal Engine,” What is Unreal Engine 4. [Online]. Available: https://www.unrealengine.com/en-US/. 
[Accessed: 15-Nov-2019].

[6] “Oculus Unreal Quick Start Guide,” Oculus Developer Center. [Online]. 
Available: https://developer.oculus.com/documentation/unreal/latest/concepts/unreal-quick-start-guide-go/. 
[Accessed: 15-Nov-2019].

[7] U. Technologies, “Unity,” Unity. [Online]. Available: https://unity.com/. [Accessed: 15-Nov-2019].

[8] “Oculus Unity Getting Started Guide,” Oculus Developer Center. [Online]. 
Available: https://developer.oculus.com/documentation/unity/latest/concepts/book-unity-gsg/. [Accessed: 15-Nov-2019].

[9] “Unity Cross-Platform Development,” Oculus Developer Center. [Online]. 
Available: https://developer.oculus.com/documentation/unity/latest/concepts/unity-cross-platform-dev/. 
[Accessed: 15-Nov-2019].

[10] “Open source Cardboard SDK  |  Google Developers,” Google. [Online]. 
Available: https://developers.google.com/cardboard/. [Accessed: 15-Nov-2019].

[11] “Quickstart for Google Cardboard for Android NDK  |  Google Developers,” Google. [Online]. 
Available: https://developers.google.com/cardboard/develop/c/quickstart. [Accessed: 15-Nov-2019].

[12] “Quickstart for Google Cardboard for iOS  |  Google Developers,” Google. [Online]. 
Available: https://developers.google.com/cardboard/develop/ios/quickstart. [Accessed: 15-Nov-2019].

[13] “Oculus Go: Standalone VR Headset,” Oculus. [Online]. Available: https://www.oculus.com/go/. [Accessed: 15-Nov-2019].

[14] A. Robertson, “The Oculus Go improves mobile VR, but there's still a long way to go,” The Verge, 01-May-2018. 
[Online]. Available: https://www.theverge.com/2018/5/1/17306458/oculus-go-standalone-vr-headset-review. [Accessed: 16-Nov-2019].

[15] A. Shilov, “Oculus Go Now Available: Mainstream Standalone VR Headset Starts at $199,” RSS, 04-May-2018. [Online]. 
Available: https://www.anandtech.com/show/12715/oculus-go-standalone-vr-headset-available. [Accessed: 16-Nov-2019].

[16] “Snapdragon 821 Mobile Platform,” Qualcomm, 15-Jul-2019. [Online]. 
Available: https://www.qualcomm.com/products/snapdragon-821-mobile-platform. [Accessed: 16-Nov-2019].

[17] MeetinVR, 2019. [Online]. Available: http://meetinvr.net. [Accessed: Nov. 13, 2019]

[18] “HoloLens 2 AR Headset: On Stage Live Demonstration”, February, 2019. [Online]. 
Available: https://www.youtube.com/watch?v=uIHPPtPBgHk&feature=emb_rel_pause. [Accessed Nov. 13, 2019]

[19] RUMII, “HAVE YOUR NEXT VR MEETING OR CLASS IN THE BRAND NEW RUMII 2.0 TODAY!”, May 27, 2019. [Online]. 
Available: https://www.dogheadsimulations.com/doghead-blog/2019/5/26/have-your-next-vr-meeting-or-class-in-the-brand-new-rumii-20-today. [Accessed No. 13, 2019]

[20] “Go Development,” Oculus Developer Center. [Online]. Available: https://developer.oculus.com/go/. [Accessed: 16-Nov-2019].

[21] “VrApi,” Oculus Developer Center. [Online]. Available: https://developer.oculus.com/documentation/mobilesdk/latest/concepts/mobile-vrapi/#mobile-vrapi. [Accessed: 16-Nov-2019].

[22] T. Y. Todorov, “Understanding .NET Just-In-Time Compilation,” Telerik Blogs, 10-Oct-2019. [Online]. 
Available: https://www.telerik.com/blogs/understanding-net-just-in-time-compilation. [Accessed: 16-Nov-2019].

[23] “Native Samples,” Oculus Developer Center. [Online]. Available: https://developer.oculus.com/documentation/mobilesdk/latest/concepts/mobile-native-samples/. [Accessed: 16-Nov-2019].

[24] “Unreal Game Engine,” Oculus Developer Center. [Online]. Available: https://developer.oculus.com/documentation/unreal/latest/concepts/unreal-engine/. [Accessed: 16-Nov-2019].

[25] U. Technologies, “Unity,” Unity. [Online]. Available: https://unity.com/. [Accessed: 16-Nov-2019].

[26] “Unity vs Unreal: Ultimate Game Engine Showdown,” The Ultimate Resource for Video Game Design, 04-Nov-2019. 
[Online]. Available: https://www.gamedesigning.org/engines/unity-vs-unreal/. [Accessed: 16-Nov-2019].

[27] C. B. Staff, “Unity vs Unreal Engine: which game engine is for you?,” Creative Bloq, 04-Feb-2019. [Online]. 
Available: https://www.creativebloq.com/advice/unity-vs-unreal-engine-which-game-engine-is-for-you. [Accessed: 16-Nov-2019].