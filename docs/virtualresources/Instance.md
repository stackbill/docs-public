---
title: Instance
sidebar_label: Instance
---

# Getting Started


**[CloudPortal](https://www.CloudPortal.com/)** Instances are running on virtualized hardware. You can use them standalone or as part of larger, cloud-based infrastructures.

Users can **start, stop, reboot, and destroy** their own created virtual machines in **[CloudPortal CMP](https://youtu.be/wwOL091GyFM)**, by giving them complete control over their cloud-based virtual machines.

- There are two types of instance deployment types available in the **CloudPortal Cloud Management Portal.**  

   [Quick Deploy](./Instance#quick-deploy-in-CloudPortal-cmp)  |   [Advanced Deploy](./Instance#advanced-deploy-in-CloudPortal-cmp)



- The main difference between these two deployments is that **quick deployment** is mainly for novice users **who have very limited knowledge of cloud computing.**

- A user with **good knowledge of cloud technology can use advance deploy in CloudPortal CMP.**


## Quick Deploy in CloudPortal CMP

<img src="/help/img/instance/1QuickDeploy-CloudPortalCloudManagementPortal.png" width="70%" />

- Click on **Quick Deploy** to create a **instance using the  Quick Deployment type.**

### Platform selection

<img src="/help/img/instance/Instancecreation1-CloudPortalCloudManagementPortal.png" width="70%" />

- **CloudPortal CMP**s offers you two types platforms. They are: **Linux** and **Windows**.

### Distribution Types

<img src="/help/img/instance/Instancecreation3-CloudPortalCloudManagementPortal.png" width="100%" />

- **CloudPortal** offers you various types of operating system flavors like Windows Server Editions, Linux, Debian, etc..,

- There are 4 types of segregation available in the distribution selection. They are: **All**, **OS only, MarketPlace** & **My Images + ISO** 

- **All** - It will display all the OS flavours which are available in the **CloudPortal Cloud Management Portal.**
- **OS Only** - It will display only the OS related templates.
- **Marketplace** - **CloudPortal** marketplace will offers you launch instances using various type of open source applications in less time.
- **My Images + ISO** - It will display user created OS templates and also it will contains the default ISO images which **CloudPortal** will provide automatically.

### Compute Plans

<img src="/help/img/instance/Instancecreationplan-CloudPortalCloudManagementportal.png" width="100%" />

- You need to select from the list of plans which are available in the **CloudPortal CMP.** These plans will be configured by your **CloudPortal** administrator.

- Select the appropriate plan for your instance.

### Selecting a Network

<img src="/help/img/instance/Network-CloudPortalCloudManagemengtPortal.png" width="100%" />

- By default, a new network will be automatically created when you create your first instance.

- If you need to launch your instance with a public IP address, make sure that you have enabled the option **"Create Instance with Public IP"**

:::info
**Note:** If you are launch your instance without public IP address, your instance will not be accessible from internet. It will be accessible only from your instance internal network.
:::

### Configuring Cloud Firewall

<img src="/help/img/instance/1firewall-CloudPortalCloudManagementPortal.png" width="100%" />

- We can either **ON or OFF** the cloud firewall using the toggle button for your virtual instance.

- Once the cloud firewall is in the **ON** state, we need to provide the list of required ports that need to be opened in the attached network for your instance.
- Once the cloud firewall is in an **OFF** state, there will not be any restrictions, (i.e.) all the incoming & outgoing ports will be open for this instance.


### SSH Key Configuration

<img src="/help/img/instance/SSHkeypair-CloudPortalCloudManagementPortal.png" width="100%" />

:::info
Note: SSH Key pair configuration will be available only for Linux templates.
:::

- You can select your existing SSH key pair from the drop-down list. 

- Also, you can able to create a new SSH key pair using Add SSH Key pair button.
- You can also upload your existing SSH key pair to your **CloudPortal CMP.**


### Instance Information

<img src="/help/img/instance/Instancecreationidentify-CloudPortalCloudManagementPortal.png" width="80%" />

- Finally, you need to provide a name for your instance. By default, CloudPortal portal will assign a name to your instance and you can modified based on your requirements. 

- Also, you need to specify the number of instances that need to create.

### Instance Cost Estimation

<img src="/help/img/instance/Instancecreationlast-CloudPortalCloudManagementPortal.png" width="100%" />

- You can also find the approximate price for your virtual instance by clicking on the **Total Estimate** link.

<img src="/help/img/instance/cost-estimation-CloudPortalManagementPortal.png" width="90%" />

- Here, the user can view detailed information about the estimated cost.


## Advanced Deploy in CloudPortal CMP

 ### Overview

- **Advance Deploy in CloudPortal CMP** will be useful for the experienced users who have prior knowledge about cloud platform. Also, users who needs to customize virtual instance can use this option.

<img src="/help/img/instance/1AdvanceDeploy-CloudPortalCloudManagementPortal.png" width="60%" />

:::info
**Note**: **Instance Marketplace will not available under advanced deploy option.**
:::

### Platform selection

<img src="/help/img/instance/Instancecreation1-CloudPortalCloudManagementPortal.png" width="70%" />

- **CloudPortal CMP** offers you two types platforms. They are: **Linux** and **Windows**.

### Distribution Types

<img src="/help/img/instance/Instancecreation3-CloudPortalCloudManagementPortal.png" width="100%" />


- **CloudPortal Cloud Management Portal** offers you various types of operating system flavors like Windows Server Editions, Linux, Debian, etc..,

- There are 4 types of segregation available in the distribution selection. They are: **All**, **OS only & **My Images + ISO** 


- **All**  It will display all the OS flavours which are available in the **CloudPortal Cloud Management Portal.**
- **OS Only** - It will display only the OS related templates.
- **My Images + ISO** - It will display user created OS templates and also it will contains the default ISO images which **CloudPortal** will provide automatically.

### Compute Plans

<img src="/help/img/instance/Instancecreationplan-CloudPortalCloudManagementportal.png"/>

- You need to select the list of plans which are available in the CloudPortal CMP. These plans will be configured by your **CloudPortal** administrator. 

- Select the appropriate plan for your instance.

### Selecting a Network

<img src="/help/img/instance/Network-CloudPortalCloudManagemengtPortal.png" width="100%" />

- By enabling "**Create Instance with Public IP**", you need to create a new network by click on Add network.

- While creating a new network, you need to provide Name, [Security group](https://CloudPortal.com) and network offering. Then click on create button.

### Configuring Cloud Firewall

<img src="/help/img/instance/1firewall-CloudPortalCloudManagementPortal.png" width="100%" />

- We can either **ON or OFF** the cloud firewall using the toggle button for your virtual instance.

- Once the cloud firewall is in the **ON** state, we need to provide the list of required ports that need to be opened in the attached network for your instance.

- Once the cloud firewall is in an **OFF** state, there will not be any restrictions, (i.e.) all the incoming & outgoing ports will be open for this instance.

### Adding Block Storage

<img src="/help/img/instance/blockstorage-CloudPortalCloudManagementPortal.png" width="100%" />

- **CloudPortal CMP** will provide you with various types of plans to add additional storage for your virtual instance. Select the required size based on your requirement.

### SSH Key Configuration

<img src="/help/img/instance/SSHkeypair-CloudPortalCloudManagementPortal.png" width="100%" />

:::info
**Note: SSH Key pair configuration will be available only for Linux templates.**
:::

- You can select your existing SSH key pair from the drop-down list. 

- Also, you can able to create a new SSH key pair using Add SSH Key pair button.
- You can also upload your existing SSH key pair to your **CloudPortal CMP.**

### Instance Information

<img src="/help/img/instance/Instancecreationidentify-CloudPortalCloudManagementPortal.png" width="80%" />

- Finally, you need to provide a name for your instance. By default, the **CloudPortal Cloud Management Portal** will assign a name to your instance and you can be modified based on your requirements.
- Also, you need to specify the number of instances that need to create.

### Instance Cost Estimation

<img src="/help/img/instance/Instancecreationlast-CloudPortalCloudManagementPortal.png" width="100%" />

- You can also find the approximate price for your virtual instance by click on the **Total Estimate** link.

<img src="/help/img/instance/cost-estimation-CloudPortalManagementPortal.png" width="90%" />

- Here, the user can view detailed information about the estimated cost.


## Accessing your windows virtual instance from your windows Laptop or Desktop

- Let assume that you have already created a  windows virtual machine under your account.

<img src="/help/img/Accessing/1AccessingyourwindowsvirtualinstancefromyourwindowsLaptop-CloudPortalCMP.png" width="100%" />

- Click on the virtual machine and navigate to its details and copy the Public IP.

<img src="/help/img/Accessing/2Accessing your windows virtual instance from your windows Laptop-CloudPortalCMP.png" width="100%" />

- Open the run prompt from your laptop/desktop (**Pressing ctrl key+R**) and type mstsc command.

<img src="/help/img/Accessing/3Accessing your windows virtual instance from your windows Laptop-CloudPortalCMP.png" width="80%" />

- Paste the Public IP which was copied from the instance details page in the RDP window.

<img src="/help/img/Accessing/4Accessing your windows virtual instance from your windows Laptop-CloudPortalCMP.png" width="80%" />

- Now it will prompts for username & Password, you can get that credentials from the your VM details page.

<img src="/help/img/Accessing/5Accessing your windows virtual instance from your windows Laptop-CloudPortalCMP.png" width="70%" />


- Now you will able to login into your windows virtual machine from your Laptop or Desktop.


##  Remote Desktop to Your Instance From a Linux Computer using Rdesktop

- Once the user open linux screen at the top left corner there is a option called **Application**
- Click on it to view the drop down. 

<img src="/help/img/AccessingLinux/Linux-CloudPortalCMP.png" width="90%" />

- From the drop down, Click on **Utilities**.
- From the utilities, Click on **Remote Desk Viewer**


<img src="/help/img/AccessingLinux/2Accessingwindowsvminlinux-CloudPortalCMP.png" width="80%" />

- Remote desk viewer screen appears.
- At the top left corner there is a option called **Connect**, Click on it.

<img src="/help/img/AccessingLinux/3Accessingwindowsvminlinux-CloudPortalCMP.png" width="80%" />

- Change the Protocol into **RDP** to access the Windows VM in linux machine.

<img src="/help/img/AccessingLinux/4Accessingwindowsvminlinux-CloudPortalCMP.png" width="90%" />

- Enter the Public Ip in the Host option.
- Enter the username and password.
- Finally click on the Connect button.

## Accessing your Linux virtual instance from your windows Laptop or Desktop

- Let assume that you have already created a  Linux virtual instance under your account.

<img src="/help/img/linux/1AccessingLinux-CloudPortalCLoudManagementPortal.png" width="100%" />

- You can find the server Public IP from the instance details page.

<img src="/help/img/linux/2AccessingLinux-CloudPortalCLoudManagementPortal.png" width="100%" />


- You can use the Putty tool to access the Linux virtual instance from windows environment.

Note: PuTTY is a free and open-source terminal emulator which used to connect linux machines. You can download the Putty from this URL https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html

- Once you download the Putty tool double click to open it.


<img src="/help/img/linux/3AccessingLinux-CloudPortalCLoudManagementPortal.png" width="40%" />


- Paste your instance IP in the Hostname textbox and provide port number under port section. Then click on open button.

<img src="/help/img/linux/4AccessingLinux-CloudPortalCLoudManagementPortal.png" width="70%" />

- Provide the username and password for your instance and press Enter.

Note: By default, CentOS username will be **root** and Ubuntu OS username will be **ubuntu**

- Now you will able to login into your Linux instance.

<img src="/help/img/linux/5AccessingLinux-CloudPortalCLoudManagementPortal.png" width="100%" />


## Accessing your Linux virtual instance using SSH Key from your windows Laptop/Desktop

- Let assume that you have already created a Linux virtual instance with SSH key under your account.

- You can find your SSH key name from the instance details page.

<img src="/help/img/AccessingLinux/1AccessingLinux-CloudPortalCloudManagementPortal.png" width="100%" />

- The SSH key which was attached to your instance can be download to your Laptop / Desktop. For that, Go to Compute -> SSH Key Manager.

<img src="/help/img/AccessingLinux/2AccessingLinux-CloudPortalCloudManagementPortal.png" width="40%" />

- Click the download button to download your corresponding SSH key pair.

<img src="/help/img/AccessingLinux/3AccessingLinux-CloudPortalCloudManagementPortal.png" width="100%" />
<img src="/help/img/AccessingLinux/4AccessingLinux-CloudPortalCloudManagementPortal.png" width="80%" />

- By default, you will not able to access the linux instance using SSH key with **PEM** extension key pair. 

<img src="/help/img/AccessingLinux/5AccessingLinux-CloudPortalCLoudManagementPortal1.jpg" width="100%" />

- You need to convert your SSH key pair to **PPK** extension using PuttyGen tool. You can download this tool from the URL https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html 

<img src="/help/img/AccessingLinux/6AccessingLinux-CloudPortalCloudManagementPortal.png" width="100%" />

- Once you dowload the puttygen tool, double click to open it. Then click on the Load button.

<img src="/help/img/AccessingLinux/7AccessingLinux-CloudPortalCloudManagementPortal.png" width="70%" />

- Change the File extensions to **All Files**, Select your SSH key pair file and click on open button.

<img src="/help/img/AccessingLinux/8AccessingLinux-CloudPortalCloudManagementPortal.png" width="100%" />

- You will receive a popup screen that **SSH key pair has been loaded successfully**.

<img src="/help/img/AccessingLinux/9AccessingLinux-CloudPortalCLoudManagementPortal.png" width="80%" />

- Now click on the **Save private key** option.

<img src="/help/img/AccessingLinux/10AccessingLinux-CloudPortalCLoudManagementPortal.png" width="80%" />

- It will prompt you to continue to save the private key without passphrase. Click Yes to continue.

<img src="/help/img/AccessingLinux/11AccessingLinux-CloudPortalCLoudManagementPortal.png" width="80%" />

- Now, provide a name for the key and make sure that this Key is save in .PPK format.

<img src="/help/img/AccessingLinux/12AccessingLinux-CloudPortalCLoudManagementPortal.png" width="80%" />

### Accessing the VM using SSH Key

- You can use the Putty tool to access the Linux virtual instance from windows environment.

:::info
**Note**: PuTTY is a free and open-source terminal emulator which used to connect linux machines. You can download the Putty from this URL https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
:::


- Paste your instance IP in the Hostname textbox and provide the port number under the port section. Then expand SSH Option from the Putty tool.

<img src="/help/img/AccessingLinux/13AccessingLinux-CloudPortalCLoudManagementPortal.png" width="80%" />

- Then expand Auth option and select credentials.

<img src="/help/img/AccessingLinux/14AccessingLinux-CloudPortalCLoudManagementPortal.png" width="70%" />

- Click on browse button under Private key file for authentication section.

<img src="/help/img/AccessingLinux/15AccessingLinux-CloudPortalCLoudManagementPortal.png" width="80%" />

- Select your converted PPK file and click on Open button.

<img src="/help/img/AccessingLinux/16AccessingLinux-CloudPortalCLoudManagementPortal.png" width="90%" />

- Now click on **Open** button.

<img src="/help/img/AccessingLinux/17AccessingLinux-CloudPortalCLoudManagementPortal.png" width="70%" />

- Provide the **username as root and press Enter**. You can able to see that you virtual instance will use the converted PPK to login into your machine.

<img src="/help/img/AccessingLinux/18AccessingLinux-CloudPortalCLoudManagementPortal.png" width="100%" />



## Instance Details 

### Summary Overview in CloudPortal CMP

- **CloudPortal Cloud Management Portal** has designed an exclusive user friendly instance dashboard especially for novice users. **This dashboard will provide you various information about instance such as Instance Zone, Instance status, Instance IP's, SSH keypair, and many more.**

- Also, **CloudPortal CMP** provide you the **basic virtual instance monitoring information such as CPU, Memory, Disk & Network**. If you need detailed information about the services, then user need to enable Advanced monitoring for your virutal instance.

- **CloudPortal** will continue to enhance the UI/UX experience so that the user can access the functionalities with greater clarity and ease.

### Start, Stop & Restart Virtual Instance

- **CloudPortal  Cloud Management Portal** has provide you handy functionality to **start, stop and restart** your virtual instance without any hassles.

<img src="/help/img/Instancedetails/1Instancedetails-CloudPortalCloudManagementPortal.png" width="100%" />

### VM snapshots

- We can able to take **VM snapshots from the instance details page**. Detailed information about **VM snapshots** are under [snapshots](../vm-snapshot/creating-a-vm-snapshot#creating-vm-snapshot-in-CloudPortal-cmp) section.
 
 <img src="/help/img/Instancedetails/2Instancedetails-CloudPortalCloudManagementPortal.png" width="100%" />

### Recover VM

<img src="/help/img/Instancedetails/3Instancedetails-CloudPortalCloudManagementPortal.png" width="100%" />

- All the virtual machines which are created in CloudPortal will have four stages. They are:

**Creating, Running, Stop, Delete & Expunge**

- **Creating** - When you create a new instance it will be in creating state.
- **Running** - Once your VM has been successfully created, it will be in Running state.
- **Stop** - When the VM is stopped state, it will move to stop state.
- **Delete** - When you delete a VM without **Expunge** option has been enabled it will be moved to delete state. Later you can recover the VM using the **Recover VM** option.
- **Expunge** - The VM will transition to this level once it has been totally removed from the infrastructure.

- **Recover VM** option only available if the VM status is in **Destroyed** state.

<img src="/help/img/Instancedetails/4Instancedetails-CloudPortalCloudManagementPortal.png" width="100%" />

- To recover a VM from the destroy state, click on Recover VM option.
<img src="/help/img/Instancedetails/5Instancedetails-CloudPortalCloudManagementPortal.png" width="100%" />

- Click **OK** to recover the VM from the destroyed state.

<img src="/help/img/Instancedetails/6Instancedetails-CloudPortalCloudManagementPortal.png" width="100%" />

- After few seconds, the VM state will be changed from destroyed to stopped state.
- Now your VM has been successfully recovered.

### Attach ISO

<img src="/help/img/Instancedetails/8Instancedetails-CloudPortalCloudManagementPortal.png" width="70%" />

- If you need to reinstall your virtual machine using ISO, then you can use this option. 
- Once the ISO has been attached successfully, When you reboot the machine, it will automatically boot from the selected ISO.

:::info
**Note: Make sure that you have backup your virtual machine data before proceeding this option.** 
:::

### Reinstall VM in CloudPortal CMP

**CloudPortal's instance can be reinstalled by following the procedures below.**

-  **Step 1** - Click on the **Compute option** from the side menu of the portal and **select Instance**.

<img src="/help/img/virtualresources/Instancecreation-CloudPortalCloudManagementportal1.png" width="90%" />


- **Step 2** - Click on the **Instance** so that you can view a **summary page of the particular instance**.
 
<img src="/help/img/virtualresources/Console2-CloudPortalCloudManagementPortal.png" width="100%" />

-   **Step3**  - There you can view the  **Reinstall icon at right side of the panel, Click on it.**

<img src="/help/img/virtualresources/Reinstall-CloudPortalCloudManagementPortal.png" width="100%" />

- Now the Reinstall option appears on the screen.

<img src="/help/img/virtualresources/Reinstall3-CloudPortalCloudManagementPortal.png" width="80%" />

:::info
**Note: Make sure that you have backup your virtual machine data before proceeding this option. This option will lead you to data loss.**
:::

- **Select Instance** - In this step, the user must select the OS image that will be created after the reinstallation is finished.
- **Enter the VM name** - Here the user needs to enter the name of the instance to install.
- Finally **click OK** button.

<img src="/help/img/virtualresources/Reinstall-CloudPortalCloudManagement.png" width="100%" />

- **Now the instance has been reinstalled successfully.**



### Accessing Console in CloudPortal CMP

**Using Accessing Console you can able to access the instance through webbrowser.**

Below is the following steps for Accessing console for the instance.
- **Step 1** - Click on the **Compute option** from the side menu of the portal and **select Instance**.

<img src="/help/img/virtualresources/Instancecreation-CloudPortalCloudManagementportal1.png" width="90%" />

- **Step 2** - Click on the **Instance** so that you can view a **summary page of the particular instance**.
 
<img src="/help/img/virtualresources/Console2-CloudPortalCloudManagementPortal.png" width="100%" />

- **Step3** - There you can view the **Console icon at right side of the panel, Click on it.**
 
<img src="/help/img/virtualresources/console-CloudPortalcloudmanagementportal.png" width="90%" />

- Once you click on the **Console icon it will opens a new window.**

<img src="/help/img/virtualresources/console3CloudPortalcloudmanagementportal.png" width="90%" />

- Here, the user enters their instance **username and password and clicks the Enter key.**
- Now the instance has been logged in.


### Destroy VM in CloudPortal CMP

- **To delete an instance of CloudPortal CMP, follow the steps below.**

- **Step 1** - Click on the **Compute option** from the side menu of the portal and **select Instance**.

<img src="/help/img/virtualresources/Instancecreation-CloudPortalCloudManagementportal1.png" width="80%" />

- Now the instance page appears on the screen.

<img src="/help/img/virtualresources/Resizeinstance1-CloudPortalCloudManagementPortal.png" width="100%" />

- Make sure the **instance is in the stopped stage** before selecting it.
- Click on the **Instance** so that you can view a **summary page of the particular instance**.

<img src="/help/img/virtualresources/Deleting-CloudPortalCloudManagementPortal.png" width="100%" />

- Click on the **Summary** option from the menu.
- A **delete option** can be found on the panel's right side. Just click it. 
- Now the **Destroy VM** option appears on the screen.

<img src="/help/img/virtualresources/1Deletinginstance-CloudPortalCloudManagementPortal.png" width="70%" />


**Step 1** - On the **first step** the user wants **expunge the all associated resources.**

**Step2** - On the **second step** the user wants to **confirm to delete the instance by entering the name of the VM.**
- Finally click on **Destroy button.**

<img src="/help/img/virtualresources/3Deletingvm-CloudPortalCloudManagementPortal.png" width="100%" />

- Now the instance has been deleted successfully.

### Instance Resize 

**CloudPortal Cloud Management Portal** offers you flexible way to migrate your instance plan from one plan to another using simple GUI Interface.

- **Resizing an instance in CloudPortal CMP is simple as following these steps**

<img src="/help/img/virtualresources/Resizeinstance1-CloudPortalCloudManagementPortal.png" width="100%" />


:::info 
Before resizing the instance, **ensure** that the **instance has been stopped**.
:::

<img src="/help/img/virtualresources/Resizeinstance1-CloudPortalCloudManagementPortal.png" width="100%" />

- Click on the instance.

<img src="/help/img/virtualresources/Resizeinstance2-CloudPortalCloudManagementPortal.png" width="90%" />

- Click on the **resize option** to resize the instance.
- By selecting the option, you can see the size of the current instance. 
- Depending on your needs, you can upgrade or downgrade the size of the instance from the following plans.

<img src="/help/img/virtualresources/resizeinstance3-CloudPortalCloudManagementPortal.png" width="100%" />

-  Click the **RESIZE** button after selecting the plan..

<img src="/help/img/virtualresources/resizeinstance4-CloudPortalCloudManagementPortal.png" width="100%" />

- Now the **VM has been resized successfully.**.

## Savings Plans in CloudPortal CMP

Savings Plans in [**CloudPortal Cloud Management Portal**](https://www.CloudPortal.com/) are a flexible pricing model that offer low prices on resource usage, in exchange for a commitment to a consistent amount of usage (measured in ₹ /hour) for long term.

:::info
- **Before enabling a saving plan ensure the instance is on stopped stage.**
:::

<img src="/help/img/virtualresources/Resizeinstance-CloudPortalCloudManagementportal.png" width="100%" />


**The user can enable saving plans in CloudPortal CMP in two ways they are,**

- Enable the plan directly by **clicking on the instance**, which may automatically generate the instance information process.
- Second method, Enabling the saving plan using **the savings plan** option from the side menu option.

### **Enable the saving plan directly by clicking on the instance**

- **Method 1** 

<img src="/help/img/virtualresources/Resizeinstance1-CloudPortalCloudManagementPortal.png" width="100%" />

- Click on the instance.
- Select **Resize** from the option.

<img src="/help/img/virtualresources/Resizeinstance2-CloudPortalCloudManagementPortal.png" width="80%" />

- When you scroll down on the panel, you will see an option called **Purchase Saving plan**.

<img src="/help/img/virtualresources/Resizeinstance6-CloudPortalCloudManagementPortal.png" width="80%" />

- On clicking the **Purchase Saving Plan button**, the page for Purchase Saving Plan is appear on the screen.
- Here you can **select the offering as per the requirement**.

<img src="/help/img/virtualresources/Reservedinstance-CloudPortalCloudManagementPortal.png" width="80%" />

- **Reserved offering type** - There are two types of reserved offering they are **STANDARD** and **CONVERTABLE**.

  1. **STANDARD OFFERING** - Users who select the standard offering cannot upgrade or downgrade the offering; they can only maintain the same offering they configured initially.

  2. **CONVERTABLE OFFERING**  - If users select the convertible offering, they can upgrade or downgrade the offering at any time.

 **RI Plan name**
  1. Select the RI plan **(i.e. yearly or monthly coverage)**.


<img src="/help/img/virtualresources/Reservedinstance7-CloudPortalCloudManagementPortal.png" width="90%" />

- Finally Click on the **SAVE PLAN** option.

<img src="/help/img/virtualresources/Reservedinstance8-CloudPortalCloudManagementPortal.png" width="100%" />

- Now the Reserved offering is successfully configured.

## Configure saving plan offering using the **configuring saving plan option**

- **Method 2**

- Now we will configure saving plan offering using the second method as **configuring saving plan option**.
- The billing option can be found on the left side of the panel. 
- Click on it to view the drop-down menu.
- From the drop-up select the **Savings plan**.

<img src="/help/img/virtualresources/2Reservedinstance-CloudPortalCloudManagementPortal.png" width="100%" />

- **Saving Plan** screen appears on the screen.

<img src="/help/img/virtualresources/2Savingplan-CloudPortalCloudManagementPotal.png" width="80%" />

&nbsp;

- **Active plan** - Here you can see how many **Reserved plans are in active.** 
 - **Savings** - Using the reserved instance policy, you will be able to see **how much amount has been saved by offering saving plan.**
 - **Plans expire this month** - In this section, you can see the **plans that going to expire this month.**
- **Current Active Plans** - This section shows the Current Active Plan and necessary details.
- At the bottom of the page you can able to see an option called **Purchase Saving Plan**.
- Click on it to **Purchase a Saving plan** for your resource.

<img src="/help/img/virtualresources/Resizeinstance6-CloudPortalCloudManagementPortal.png" width="100%" />

- Purchase a Saving plan screen appears.
- Here you can choose the offering as per the requirement.

<img src="/help/img/virtualresources/3fReservedinstance-CloudPortalCloudManagementPortal.png" width="90%" />

- **Reserved offering type** - There are two types of reserved offering they are **STANDARD** and **CONVERTABLE**.

  1. **STANDARD OFFERING** - Users who select the standard offering cannot upgrade or downgrade the offering; they can only maintain the same offering they configured initially.

  2. **CONVERTABLE OFFERING**  - If users select the convertible offering, they can upgrade or downgrade the offering at any time.

 **RI Plan name**
  1. Select the RI plan **(i.e. yearly or monthly coverage)**.

 **Instance**
  1. In this case, the user wants to **select the VM on which a saving plan will be configured.**


<img src="/help/img/virtualresources/Reservedinstance7-CloudPortalCloudManagementPortal.png" width="100%" />

- Finally Click on the **SAVE PLAN** option.

<img src="/help/img/virtualresources/Reservedinstance8-CloudPortalCloudManagementPortal.png" width="100%" />

- Now the **Reserved offering is successfully configured.**


### Storage and Snapshot

- This section will provide you the functionality to add additional storage to your virtual instance. Also, there are few enhanced features for your virtual storage such as Resize, Volume snapshot, Recurring Snapshot & Create Template.

<img src="/help/img/Instancedetails/9Instancedetails-CloudPortalCloudManagementPortal.png" width="90%" />

### Network & Firewall

- One of the most essential part for your virtual instance is Network and Firewall.  This section provide you various features to add additional functionality & security for your virtual instances.

- In addition to this, Load balancer feature will be included to all the source NAT IP under each isolated network.

- Please refer the Networking section for more information.

### Monitoring agent in CloudPortal CMP

- **CloudPortal** Portal will provide you the detailed monitoring feature to monitor your virtual resources like CPU Usage, Memory Consumption, I/O, Network, Disk Usage, Process etc.

- Please refer [monitoring](../Monitoring/Dashboard-Overview#dashboard-overview-in-CloudPortal-cmp) section for more information.

### Access & Security

- **CloudPortal CMP** will provide additional security features to your virtual machines such as SSH key pair. You can able to add or upload existing SSH key pair under this section.

### VM Scheduler in CloudPortal CMP

- VM Scheduling is process of start or stop your virtual machines automatically at certain date and time.  Using **CloudPortal CMP** you can achieve this.

With **CloudPortal's VM scheduler**, **you can start and stop instances automatically**. You can **manage instances more efficiently** by automating the process with a VM scheduler. You can set up instance schedules for both on-off workloads.

 For example, use **VM scheduler to only run VM instances during working hours.**

  The **Vm Scheduler Guide for CloudPortal CMP** is provided below.

- **Compute** option can be found on the left side of the panel click on it view the pop up. 
- From the pop up click on the **instance** option.

<img src="/help/img/virtualresources/Instancecreation-CloudPortalCloudManagementportal1.png" width="80%" />


- Click on the particular instance. 

<img src="/help/img/virtualresources/Console2-CloudPortalCloudManagementPortal.png" width="100%" />

- Now the **summary of the particular instance** appears on the screen.
- At the right side of the panel you can see a option for **Vm scheduler**, Click on it.

<img src="/help/img/virtualresources/1VMscheduler-CloudPortalCloudManagementPortal.png" width="100%" />

- Click **Create** on the button.
- VM Scheduler screen appears on the screen.

<img src="/help/img/virtualresources/2VMscheduler-CloudPortalCloudManagementPortal.png" width="100%" />

- **Scheduler name** - Give a name for the scheduler.
- **VM Action** - Here select the action that you are going to set (i.e start or, stop).
- **Week days** - Here select the specific days that Instance should perform.
- **Time zone** - Mention a specific time zone to perform the scheduler process on the specific time.
- Finally click **create** button.

<img src="/help/img/virtualresources/3VMscheduler-CloudPortalCloudManagementPortal.png" width="100%" />

- Now the **VM scheduler** has been created successfully.

### Notes

<img src="/help/img/Accessing/Notes-CloudPortalCloudManagementPortal.png" width="100%" />

- **Notes** - In this option the user can take notes.





