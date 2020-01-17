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

### Functionality

### Stability

### Efficiency

### Compatibility

### Maintainability

### Project management

