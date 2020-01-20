---
title: Future-Plan
date: 2020-01-14 17:02:59
---

# Future Plans

This project has been divided into three main sections: Oculus Go compatibility, Unity model building, Central Server.

Below is a list of functions and features are yet to be implemented, corresponding to each sections.

## Oculus Go:

1. Make use the of the Oculus platform voice chat API.
    - The API is called 'Oculus party', users may start a voice chat with multiple facebook
      friends in one session. This voice chat will continue to exist when the user is inside
      an Oculus app. We are going to use this API to meet the real time voice chat communication
      requirement and test its usability when the user is running our side loaded application.

2. Utilise the hand held tracking device connected to the Oculus Go.
    - The buttons on the device can employed so that users may use them to interact with the
      UI interface once inside the VR meeting environment.
    - User should at least be able to point and select a feature on the UI.

## Unity:

1. Building a UI for the VR meeting environment.
    - The UI should be made compatible with the hand held device. The features should be selected
      using the device.
    - Must include the following core features:
        - Join meeting
        - Leave meeting
        - Initiate meeting
        - Making a gesture

2. Add colour to the meeting environment models, for better user experience, more appealing to the eye.

3. Make use of the Watson Personality Insights API.
    - This API should ask for user's permission to collect data from their facebook accounts.
    - Based on the data, it runs an analysis that returns serveral prominent personalities that
      best describes the user.
    - Each personality corresponds to a colour, which is used as the base colour of the avatar.

4. Ability for the presenter to upload a presentation file for every one attendee to see.

## Server:

1. Integration between the Unity application and central server.
    - PC based platform testing:
        - Connection between the server and one user.
        - Test the ability to 'initiate a meeting', user initiatin the meeting should automaticlly
          become the presenter.
        - Multiple users connecting to the server to establish a fullly functioning meeting session.
        - User able to 'join a meeting'.
        - User able to 'exit from a meeting'.

    - Oculus Go based testing:
        - After the application has been deployed on to Oculus Go, users must still be able to
          establish a connection with the server, provided there's an internet connection.
        - All operations must be done whilest inside the VR meeting environment, using Oculus Go and 
          the hand held device.

## Testing:

Generate test cases for every features.