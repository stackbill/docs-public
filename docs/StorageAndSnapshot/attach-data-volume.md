---
title: Attach Data Volume
sidebar_label: Attach Data Volume
---

### Steps to attach a data volume in windows VM

- Let's assume that you have already created a VM and volume has been attached to your windows instance.

<img src="/help/img/volume/1Volume-CloudPortalCloudManagementPortal.png" width="90%" />


- Login into your windows instance and right click on the windows button and select **disk management.**

<img src="/help/img/volume/2Volume-CloudPortalCloudManagementPortal.png" width="40%" />

- While access the disk management snap-in, it automatically detects your attached disk and prompt to initialize the disk. Click **OK** to continue.

<img src="/help/img/volume/3Volume-CloudPortalCloudManagementPortal.png" width="90%" />

- Currently, your attached disk will be in **unallocated** state. 
- Right click on the disk and select **New Simple Volume**.

<img src="/help/img/volume/4Volume-CloudPortalCloudManagementPortal.png" width="90%" />

- New wizard will popup, click **Next** to continue.

<img src="/help/img/volume/5Volume-CloudPortalCloudManagementPortal.png" width="70%" />

- Specify the volume size, by default it takes **total disk space.** Then click **Next.**

<img src="/help/img/volume/6Volume-CloudPortalCloudManagementPortal.png" width="80%" />

- Assign a **drive to your disk** and click **Next.**

<img src="/help/img/volume/7Volume-CloudPortalCloudManagementPortal.png" width="80%" />

- Specify a filesystem for your disk. By default, **NTFS will be selected and Next.**

<img src="/help/img/volume/8Volume-CloudPortalCloudManagementPortal.png" width="80%" />

- Click **Finish** to complete the wizard.

<img src="/help/img/volume/9Volume-CloudPortalCloudManagementPortal.png" width="80%" />

- After few seconds, your drive will be available to use.

<img src="/help/img/volume/10Volume-CloudPortalCloudManagementPortal.png" width="80%" />