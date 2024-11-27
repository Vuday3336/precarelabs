from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn

app = FastAPI()

class ReportRequest(BaseModel):
    reference_number: str

class ReportResponse(BaseModel):
    patient_name: str
    report_data: dict

@app.post("/api/reports")
async def access_medical_report(request: ReportRequest):
    # Simulated report access logic
    if request.reference_number:
        return ReportResponse(
            patient_name="John Doe",
            report_data={
                "test_type": "Full Body Checkup",
                "date": "2024-02-15"
            }
        )
    raise HTTPException(status_code=404, detail="Report not found")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
