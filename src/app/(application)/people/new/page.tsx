'use client'

import CustomFields from "@/src/app/ui/projects/CustomFields";
import CustomFieldsSelector from "@/src/app/ui/projects/CustomFieldsSelector";
import { Camera } from "lucide-react";
import { useState } from "react";
import { User } from "@/src/app/lib/definition";
import { createUser } from "../actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SnackBar from "@/src/app/ui/SnackBar";


export default function Page() {

  const router = useRouter();

  const [user, setUser] = useState<User>({
    fullName: '',
    email: '',
    password: '',
    fatherName: '',
    resetToken: '',
    phoneNo: 0,
    country: '',
    state: '',
    city: '',
    address: '',
    pincode: '',
    access: 1,
    role: '',
    loggedIn: false,
    locked: false,
    teams: [],
    projects: [],
    additional: {}
  });

  const [customFields, setCustomFields] = useState<any>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [open, setOpen] = useState(false)
  const [snackColor, setSnackColor] = useState('')
  const [snackMessage, setSnackMessage] = useState('')

  function updateState(field: string, value: string | number): void {
    setUser({
      ...user,
      [field]: value
    });

    validateField(field, value);
  }

  function handleCustomFieldChange(id: string, value: string): void {
    setCustomFields({
      ...customFields,
      [id]: value
    });
  }

  function validateField(field: string, value: string | number): string {
    let errorMessage = '';
  
    switch (field) {
      case 'fullName':
        if (!value) {
          errorMessage = "Full Name is required.";
        }
        break;
      case 'fatherName':
        if (!value) {
          errorMessage = "Father Name is required.";
        }
        break;
      case 'email':
        if (!value) {
          errorMessage = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value))) {
          errorMessage = "Invalid email format.";
        }
        break;
      case 'phoneNo':
        if (!value) {
          errorMessage = "Phone Number is required.";
        } else if (String(value).length < 10) {
          errorMessage = "Phone Number must be at least 10 digits.";
        }
        break;
      case 'country':
        if (!value) {
          errorMessage = "Country is required.";
        }
        break;
      case 'state':
        if (!value) {
          errorMessage = "State is required.";
        }
        break;
      case 'city':
        if (!value) {
          errorMessage = "City is required.";
        }
        break;
      case 'address':
        if (!value) {
          errorMessage = "Address is required.";
        }
        break;
      case 'pincode':
        if (!value) {
          errorMessage = "Pincode is required.";
        }
        break;
      case 'role':
        if (!value) {
          errorMessage = "Role is required.";
        }
        break;
      default:
        break;
    }
  
    return errorMessage;
  }
  
  function validateForm(): boolean {
    const fieldsToValidate = ['fullName', 'fatherName', 'email', 'phoneNo', 'country', 'state', 'city', 'address', 'pincode', 'role'];
    let formIsValid = true;
    const newErrors: Record<string, string> = {};
  
    fieldsToValidate.forEach(field => {
      const value = user[field as keyof User];
      const error = validateField(field, value);
      if (error) {
        formIsValid = false;
      }
      newErrors[field] = error;
    });
  
    setErrors(newErrors);
  
    return formIsValid;
  }
  
  async function handleCreateUser() {
    if (!validateForm()) return;
  
    const completeUser = {
      ...user,
      additional: customFields
    };

    console.log(completeUser)
  
    let res = await createUser(completeUser);

    console.log(res)

    if (res?._id) {
      setOpen(true)
      setSnackColor('bg-green-500')
      setSnackMessage('User created successfully')
  
      setTimeout(() => {
        setOpen(false)
        setSnackColor('')
        setSnackMessage('')
        router.push(`${res._id}`);
      }, 5000)
    }
  }
  
  return (
    <>
      <div className="p-5 w-full">
        <div className="flex flex-row justify-between mb-3">
          <h4 className="text-md font-medium bold text-gray-500">People / Create User</h4>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-white shadow col-span-3 rounded-[16px]">
            <div className="p-6">
              <div className='grid grid-cols-4 gap-3'>
                <div className="relative mt-2 rounded-md col-span-4">
                  <div className='mb-2'>
                    <label htmlFor='fullName' className='font-medium'>Avatar</label>
                  </div>  
                  <div className="relative">
                    <div className="h-[100px] w-[100px] bg-slate-100 rounded-full flex justify-center items-center">
                      <div className="p-3 bg-slate-200 rounded-full relative">
                        <Camera />
                        <input
                          type="file"
                          accept="image/*"
                          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='fullName' className='font-medium'>Full Name</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="fullName"
                      name="fullName"
                      type={"text"}
                      placeholder="Full Name"
                      value={user.fullName}
                      onChange={(e) => updateState('fullName', e.target.value)}
                      className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='fatherName' className='font-medium'>Father Name</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="fatherName"
                      name="fatherName"
                      type="text"
                      placeholder="Father Name"
                      value={user.fatherName}
                      onChange={(e) => updateState('fatherName', e.target.value)}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                    {errors.fatherName && <p className="text-red-500 text-sm mt-1">{errors.fatherName}</p>}
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='email' className='font-medium'>Email</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e) => updateState('email', e.target.value)}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='phone' className='font-medium'>Phone Number</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Phone Number"
                      value={user.phoneNo ? user.phoneNo : ''}
                      onChange={(e) => updateState('phoneNo', Number(e.target.value))}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                    {errors.phoneNo && <p className="text-red-500 text-sm mt-1">{errors.phoneNo}</p>}
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='country' className='font-medium'>Country</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="country"
                      name="country"
                      type="text"
                      placeholder="Country"
                      value={user.country}
                      onChange={(e) => updateState('country', e.target.value)}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                    {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='state' className='font-medium'>State</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="state"
                      name="state"
                      type="text"
                      placeholder="State"
                      value={user.state}
                      onChange={(e) => updateState('state', e.target.value)}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='city' className='font-medium'>City</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="City"
                      value={user.city}
                      onChange={(e) => updateState('city', e.target.value)}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='address' className='font-medium'>Address</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Address"
                      value={user.address}
                      onChange={(e) => updateState('address', e.target.value)}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='pincode' className='font-medium'>Pincode</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="pincode"
                      name="pincode"
                      type="text"
                      placeholder="Pincode"
                      value={user.pincode ? user.pincode : ''}
                      onChange={(e) => updateState('pincode', Number(e.target.value))}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                    {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='role' className='font-medium'>Role</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="Role"
                      onChange={(e) => updateState('role', e.target.value)}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                    {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='access' className='font-medium'>Access</label>
                  </div>  
                  <div className="relative">
                    <select name="access" id="access" className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                     onChange={(e) => updateState('access', Number(e.target.value))}
                    >
                      <option disabled>Access</option>
                      <option value={1}>Level 1</option>
                      <option value={2}>Level 2</option>
                      <option value={3}>Level 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className='p-6'>
              <CustomFields id="people" onChange={handleCustomFieldChange} />
            </div>
            <hr></hr>
            <div>
              <div className="p-6">
                <div className="w-full">
                  <div className="flex flex-row-reverse w-full items-center gap-5">
                    <button className="py-2 px-5 bg-blue-500 rounded-md text-white font-semibold" onClick={handleCreateUser}>Create User</button>
                    <Link href={`/people`}>
                      <button className="py-2 px-5 border-blue-500 border text-blue-500 rounded-md font-semibold">Cancel</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white shadow col-span-3 rounded-[16px]">
              <div className="p-6">
                <CustomFieldsSelector id="people" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SnackBar open={open} color={snackColor} message={snackMessage} />
    </>
  )
}