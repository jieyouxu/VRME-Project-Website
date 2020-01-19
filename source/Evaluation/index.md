---
title: Evaluation
date: 2020-01-14 17:02:31
---

# Evaluation

## Summary of achievements

1. Built VR Meeting environment model using unity.
    - round table theme implemented.
    - Presenter Avatar:
        - Standing avatar located at the centre.
        - Oculus Go camera oject attached to presenter, allowing for 360 degrees field of vision.
        - Single arm raising gesture created.
    - Listener Avatar:
        - Fixed positions allocated evenly across the round table.
        - Oculus Go camera object attached to each listener, allowing for 360 degrees field of vision.
        - Single arm raising gesture created.

2. Oculus Go device setup.
    - Oculus is classified as an Android application, unity model built as an Android Package (APK)
    - Using Android Debugging Bridge (ADB), we can deploy our unity model to Oculus Go
    - Real time voice communication, resolved by using Oculus Go's inbuilt 'party' application.

3. Back-end Server for connection between attendees.
    - Signaling.
    - Meeting session management.
        - Initiate meeting session, the initialiser automatically becomes the presenter.
        - Other attendees may join the meeting, seating arrangement determined by the server.
        - Presenter and Listeners may leave the meeting.
    - External API adaptor.
        - Oculus Platform API.
    - Uses TCP and HTTP protocols to handle user requests

### MoSCow features

| ID   | Requirements | Priority | State | Contributor |
| ---- |:------------:|:--------:|:-----:|------------:|
|1|Initiate,join and leave a meeting session.|Must|In Progress|`Jieyou`|
|2|Simple emulated round table meeting.|Must|Done|`Yingming`,`Wenxin`|
|3|Attendees must be able to see the presentation slide.|Must|Done|`Yingming`,`Wenxin`|
|4|Users must be represented by avatars.|Must|Done|`Wenxin`|
|5|Name tags and speaking indication.|Must|In Progress|`Yingming`,`Wenxin`|
|6|Real-time communication.|Must|Done|`Jieyou`|
|7|Field of vision.|Must|Done|`Wenxin`|
|8|Basic VR user interface|Must|In Progress|`Wenxin`,`Yingming`|


### Known bugs

To do

### Individual contribution
| Work packages | Jieyou Xu | Yingming Luo | Wenxin Wang|
| ------------- |:---------:|:------------:|-----------:|
|Client liaison|100%|0|0|
|Requirement analysis|33%|33%|33%|
|Research|50%|25%|25%|
|UI design|20%|20%|60%|
|Programming|60%|20%|20%|
|Testing|30%|60%|10%|
|Bi-weekly report|33%|33%|33%|
|Website editing|50%|10%|40%|
|Overall contribution|40%|30%|30%|
|Roles|`Researcher`,`Back End developer`,`Website editor`|`Tester`,`Front End developer`|`UI designer`,`Website Editor`|


## Critical evaluation

### User interface/ User experience

The 3D meeting environment built using unity, combined with Oculus Go provides an immersive VR experience.
The 360 degrees field of vision and UI interface has made the design to be interactive.

### Functionality

The back end server is complete. Users are able to initiate, join and leave a meeting session as they require,
provided the protocols are strictly followed. Unity models have been side loaded onto the Oculus Go to for testing.
Once inside the VR meeting environment, users have 360 field of vision. However, their actions are currently limited.
The team is still building a user interface to be used when they are in the meeting environment, which will give
greated control, with the option of choosing some of the core features such as making a gesture, or leave the current
meeting session.

### Stability

The side loaded application is stable at the moment. Once it has been loaded onto the Oculus Go, it can be run stand
independently from any pc devices. The server is also functioning without apparent drawbacks when running separately.
However, connection issues are expected at later stage when trying to establish a connection between the server and 
the side loaded application.

### Efficiency

### Compatibility

Currently, the Unity model must be side loaded onto Oculus Go via a desktop, using Android Debugging Bridge driver.
Each users must have an Oculus Go headset in order to use this appllication.
In the future, if the application is complete, it could be built as an Oculus app and be deployed to the
Oculus store. As a result, the application is free to use on Oculus Go provided there is an internet connection that
allows the user to download this app and be connected to a server. Independent from external pc and stand alone.

### Maintainability

Once the Unity model is fully integrated with Oculus Go, the main focus would be transmissions between different users
across the central server. Server must be reliable to ensure the meeting session information are handled correctly,
a user's gestures is seen by every other attendees in the meeting. With strict protocols, this is easy to be maintained.

### Project management

The team adopted agile methods throughout the development process. Sprints were created specific to the tasks
that needs to be completed. They are then allocated to each team member by the team leader. Bi-weekly progress reports
are generated and sent to clients to inform him of our issues faced and proposed solutions.