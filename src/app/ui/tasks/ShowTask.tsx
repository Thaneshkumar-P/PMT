import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, CalendarCheck, CheckCircle2, Tags, User, User2, X } from "lucide-react";


export default function Task({ open, setOpen }: { 
  open: boolean, 
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  
  return (
    <>
      <Dialog open={open}>
        <DialogContent className="p-6 bg-white rounded-2xl m-2 custom-box-shadow w-full flex flex-col gap-3">
          <DialogHeader className="flex justify-between items-center">
            <h4 className="text-gray-500 font-normal">Phase Name/Task ID</h4>
            {/* <DialogClose onClick={() => setOpen(false)}><X /></DialogClose> */}
          </DialogHeader>
          <DialogTitle>
            Task Name
          </DialogTitle>
          <div className="grid grid-cols-2 gap-10 gap-y-5">
            <div className="flex items-center gap-3">
              <Tags />
              <h4 className="font-medium text-sm">Priority</h4>  
            </div>
            <div className="flex items-center gap-3">
              <h4 className="font-medium text-sm bg-[#ce141459] p-3 py-1.5 rounded">Priority</h4>  
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 />
              <h4 className="font-medium text-sm">Status</h4>  
            </div>
            <div className="flex items-center gap-3">
              <h4 className="font-medium text-sm bg-[rgba(20,206,54,0.35)] p-3 py-1.5 rounded">Completed</h4>  
            </div>
            <div className="flex items-center gap-3">
              <User />
              <h4 className="font-medium text-sm">Created By</h4>  
            </div>
            <div className="flex items-center gap-3">
              <h4 className="rounded-full p-3 bg-black"></h4>
              <h4 className="font-medium text-sm rounded">Username</h4>  
            </div>
            <div className="flex items-center gap-3">
              <User2 />
              <h4 className="font-medium text-sm">Assigned To</h4>  
            </div>
            <div className="flex items-center gap-3">
              <h4 className="rounded-full p-3 bg-black"></h4>
              <h4 className="font-medium text-sm rounded">Username</h4>  
            </div>
            <div className="flex items-center gap-3">
              <Calendar />
              <h4 className="font-medium text-sm">Start By</h4>  
            </div>
            <div className="flex items-center gap-3">
              <h4 className="font-medium text-sm rounded">Start Date</h4>  
            </div>
            <div className="flex items-center gap-3">
              <CalendarCheck />
              <h4 className="font-medium text-sm">Due By</h4>  
            </div>
            <div className="flex items-center gap-3">
              <h4 className="font-medium text-sm rounded">End Date</h4>  
            </div>
          </div>
          <hr />
          <div>
            <h4 className="font-medium text-base mb-2">Description</h4>
            <DialogDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, quis numquam voluptatem architecto sunt ut saepe reprehenderit libero laudantium rerum! Architecto aperiam sunt assumenda accusamus nulla, quasi reprehenderit dignissimos soluta.
            </DialogDescription>
          </div>
          <hr />
          <div>
            <h4 className="font-medium text-base mb-2">Comments</h4>
            <textarea className="resize-none h-6 border active:ring-0"></textarea>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}