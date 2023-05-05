---
title: Extend the Data Volume 
sidebar_label: Extend the Data Volume 
---

### In this tutorial, we'll show you how to extend **Windows VM's data volume.**


-   Let's assume that you have already created a VM and volume has been attached to your windows instance.

<img src="/help/img/Extendvolume/1ExtendDataVolume-CloudPortalCloudManagementPortalApacheCloudStack.png" width="70%" />

:::info
Note: Make sure that you virtual instance should be in **stopped state** before performing the below operation.
:::

- Also, For ex, you have resize your data disk by adding additional **10 GB through CloudPortal portal.**

<img src="/help/img/Extendvolume/2ExtendDataVolume-CloudPortalCloudManagementPortalApacheCloudStack.png" width="90%" />

<img src="/help/img/Extendvolume/3ExtendDataVolume-CloudPortalCloudManagementPortalApacheCloudStack.png" width="90%" />

- Start your virtual machine.

- Once you logged into your virtual machine, Open run window and type **diskmgmt.msc**

<img src="/help/img/Extendvolume/4ExtendDataVolume-CloudPortalCloudManagementPortalApacheCloudStack.png" width="80%" />

- You are able to see the **additional disk space as an unallocated state.**

<img src="/help/img/Extendvolume/5ExtendDataVolume-CloudPortalCloudManagementPortalApacheCloudStack.png" width="90%" />

- Right click on the data disk and click on **extend volume.**

<img src="/help/img/Extendvolume/6ExtendDataVolume-CloudPortalCloudManagementPortalApacheCloudStack.png" width="90%" />

-  A new wizard will be open and click **Next** to continue.

<img src="/help/img/Extendvolume/7ExtendDataVolume-CloudPortalCloudManagementPortalApacheCloudStack.png" width="70%" />

- Specify the amount of space that you willing to expand and click **Next** button.

<img src="/help/img/Extendvolume/8ExtendDataVolume-CloudPortalCloudManagementPortalApacheCloudStack.png" width="80%" />

- Click **finish** to complete the wizard.

<img src="/help/img/Extendvolume/9ExtendDataVolume-CloudPortalCloudManagementPortalApacheCloudStack.png" width="80%" />

- Now you can able to see your data volume with new disk size.

<img src="/help/img/Extendvolume/10ExtendDataVolume-CloudPortalCloudManagementPortalApacheCloudStack.png" width="90%" />
